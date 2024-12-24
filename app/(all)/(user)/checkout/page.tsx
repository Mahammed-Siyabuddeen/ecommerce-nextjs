'use client'
import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/features/redux/store';
import AddressComponent from '@/components/AddressComponent';
import Billing from '@/components/Billing';
import CheckoutSummary from '@/components/CheckoutSummary';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Page: FC = () => {

    const checkout = useSelector((state: RootState) => state.checkout)
    const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

    return (
        <>
            {checkout.cuurentComponent == 'billing' ? (
                <Elements
                    stripe={stripe}
                    options={{
                        mode: 'payment',
                        amount: (checkout.total_amount) * 100,
                        currency: 'usd'
                    }}
                >
                    <Billing />
                </Elements>

            )
                : checkout.cuurentComponent === 'summary' ? (<CheckoutSummary />)
                    : (<AddressComponent />)


            }
        </>

    )
}

export default Page