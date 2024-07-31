import React from 'react'
import { RazorpayIcon } from './Icons/RazorpayIcon'
import { StripeIcon } from './Icons/Stripe'
import { PaypalIcon } from './Icons/PaypalIcon'

function CartTotal() {
    return (
        <div className="p-3 flex flex-col gap-4 border">
            <div>
                <h1 className='font-semibold text-xl'>Total</h1>
            </div>
            <div className="flex justify-between">
                <h2>Sub-Total</h2>
                <p className="text-slate-400">155</p>
            </div>
            <div className="flex justify-between">
                <h2>delivery</h2>
                <p className="text-slate-400">155</p>
            </div>
            <div><button className="bg-yellow-400 p-3 w-full text-white">Check out</button></div>
            <div className="flex justify-evenly">
                <div className=""><RazorpayIcon /></div>
                <div className=""><StripeIcon /></div>
                <div className=""><PaypalIcon /></div>
            </div>
        </div>
    )
}

export default CartTotal