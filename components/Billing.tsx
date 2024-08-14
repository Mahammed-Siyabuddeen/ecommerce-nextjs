'use client'
import { RootState } from '@/features/redux/store';
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { getClientSecret } from '@/Services/payment.services';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Billing = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState("")
    const [loading, setLoading] = useState(false);
    const address=useSelector((state:RootState)=>state.address)
    const checkout=useSelector((state:RootState)=>state.checkout)
    const user=useSelector((state:RootState)=>state.user)
    const cart=useSelector((state:RootState)=>state.cart)
    useEffect(() => {
        if(!cart.length || !user._id.length) return;
        getClientSecret({ 
            amount: checkout.total_amount,
            cart_id:cart[0]._id,
            user_id:user._id,
            ...address
         }).then(({ data }) => {
            console.log(data.clientSecret);
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
                return_url: 'http://localhost:3000/successpayment',
            },
        
        })
        setLoading(false)
    }
    if (!clientSecret || !elements || !stripe || checkout.total_amount===0) return <>loading</>
    return (
        <form onSubmit={handleSubmit} className='w-full '>
            {
                clientSecret && <PaymentElement />
            }
            <button
                className="text-center w-full my-3 bg-white  p-3 rounded-md ">
                {!loading ? `Pay ${checkout.total_amount}` : 'Processing...'}
            </button>
        </form>
    )
}

export default Billing