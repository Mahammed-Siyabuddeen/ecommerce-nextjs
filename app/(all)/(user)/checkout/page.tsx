'use client'
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import StateList from '../../../../components/StateList';
import CartTotal from '../../../../components/CartTotal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/redux/store';
import { setAddress } from '@/features/addressSlice';
import { useRouter } from 'next/navigation';
import AddressComponent from '@/components/AddressComponent';
import Billing from '@/components/Billing';
import Loading from '@/components/Loading';
import CheckoutSummary from '@/components/CheckoutSummary';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Page: FC = () => {

    const [billing, setBilling] = useState(false);
    const [, setLoading] = useState(true)
    const checkout = useSelector((state: RootState) => state.checkout)
    const router = useRouter()
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