'use client'
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { getClientSecret } from '@/Services/payment.services';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { FormEvent, useEffect, useState } from 'react'

const Billing = ({ amount }: { amount: number }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [clientSecret, setClientSecret] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getClientSecret({ amount: amount,cart_id:'66b4d4cc81d99faee4e80f6d',user_id:'66b0b5e7c9c84f4dadaaf3a0' }).then(({ data }) => {
            console.log(data.clientSecret);
            setClientSecret(data.clientSecret)

        }).catch((error) => ApiErrorResponse(error))
    }, [amount])

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
    if (!clientSecret || !elements || !stripe) return <>loading</>
    return (
        <form onSubmit={handleSubmit} className='w-full '>
            {
                clientSecret && <PaymentElement />
            }
            <button
                className="text-center w-full my-3 bg-white  p-3 rounded-md ">
                {!loading ? `Pay ${amount}` : 'Processing...'}
            </button>
        </form>
    )
}

export default Billing