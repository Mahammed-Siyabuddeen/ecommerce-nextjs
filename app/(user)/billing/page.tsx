'use client'
import Billing from '@/components/Billing';
import { Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react'


const Page = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  const handleSubmit = () => {

  }

  return (
    <div className="container mx-auto ">
      <div className="container ml-auto mr-auto w-2/6 my-12 flex flex-col gap-4 py-4 px-2 rounded-md   bg-yellow-400">
        <div>
          <h1 className='text-3xl font-semibold'>Billing</h1>
          <div className="flex justify-between p-3">
            <p className='text-sm font-medium'>total : </p>
            <p className='text-sm font-medium'>509 </p>

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
        


        <Elements
          stripe={stripe}
          options={{
            mode: 'payment',
            amount: 50 * 100,
            currency: 'usd'
          }}
        >
          <Billing amount={50*100} />
        </Elements>
      </div>
    </div>
  )
}

export default Page