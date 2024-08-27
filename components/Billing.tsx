'use client'
import { RootState } from '@/features/redux/store';
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { getClientSecret } from '@/Services/payment.services';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { cartType } from './Types/cartType';

const Billing = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState("")
    const [loading, setLoading] = useState(false);
    const address = useSelector((state: RootState) => state.address)
    const checkout = useSelector((state: RootState) => state.checkout)
    const user = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (!checkout.checkout_products.length || !user._id.length) return;
        const cart_id=checkout.checkout_products[0]._id;
        const cartItem_id = checkout.checkout_products.length == 1 ? checkout.checkout_products[0].cartItem_id : undefined

    getClientSecret({
            amount: checkout.total_amount,
            cart_id: cart_id,
            cartItem_id: cartItem_id,
            user_id: user._id,
            ...address
        }).then(({ data }) => {
            setClientSecret(data.clientSecret)

        }).catch((error) => ApiErrorResponse(error))
    }, [checkout])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!stripe || !elements) return;

        const { error: sumbitError } = await elements.submit();
        if (sumbitError) {
            setErrorMessage(sumbitError.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            clientSecret,
            elements,
            confirmParams: {
                return_url: `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/successpayment`,
            },

        })
        setLoading(false)
    }
    if (!clientSecret || !elements || !stripe || checkout.total_amount === 0) return <>loading</>
    return (
        <div className="container mx-auto ">
            <div className="container ml-auto mr-auto w-2/6 my-12 flex flex-col gap-4 py-4 px-2 rounded-md   bg-yellow-400">
                <div>
                    <h1 className='text-3xl font-semibold'>Billing</h1>
                    <div className="flex justify-between p-3">
                        <p className='text-sm font-medium'>total : </p>
                        <p className='text-sm font-medium'>{checkout.total_amount} </p>
                    </div>
                </div>
                <div className="relative  justify-start gap-1 p-3 border rounded-md  font-medium flex items-center  shadow-sm">
                    <input type="radio" name='method' className='  outline-none   ' />
                    <label htmlFor="">COD</label>
                </div>
                <div className="relative  justify-start gap-1 p-3 border rounded-md  font-medium flex items-center  shadow-sm">
                    <input type="radio" name='method' className='  outline-none   ' />
                    <label htmlFor="">Online Payment</label>
                </div>
                <form onSubmit={handleSubmit} className='w-full '>
                    {
                        clientSecret && <PaymentElement />
                    }
                    <button
                        className="text-center w-full my-3 bg-white  p-3 rounded-md ">
                        {!loading ? `Pay ${checkout.total_amount}` : 'Processing...'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Billing