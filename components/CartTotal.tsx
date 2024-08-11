'use client'
import React, { useEffect } from 'react'
import { RazorpayIcon } from './Icons/RazorpayIcon'
import { StripeIcon } from './Icons/Stripe'
import { PaypalIcon } from './Icons/PaypalIcon'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/features/redux/store'
import { cartType } from './Types/cartType'
import { setTotalAmount } from '@/features/checkoutSlice'
import { useRouter } from 'next/navigation'

function CartTotal() {
    const dispatch=useDispatch<AppDispatch>()
    const router=useRouter()
    const cart=useSelector((state:RootState)=>state.cart)
    const checkout=useSelector((state:RootState)=>state.checkout)
    let s=cart.reduce((total:number,item:cartType)=>total+item.total,0)
    useEffect(()=>{
        dispatch(setTotalAmount(s))
    },[s,dispatch])    
    return (
        <div className="p-3 flex flex-col gap-4 border">
            <div>
                <h1 className='font-semibold text-xl'>Total</h1>
            </div>
            <div className="flex justify-between">
                <h2>Sub-Total</h2>
                <p className="text-slate-400">{checkout.total_amount}</p>
            </div>
            <div className="flex justify-between">
                <h2>delivery</h2>
                <p className="text-slate-400">50</p>
            </div>
            <div><button onClick={()=>router.push('/checkout')} className="bg-yellow-400 p-3 w-full text-white">Check out</button></div>
            <div className="flex justify-evenly">
                <div className=""><RazorpayIcon /></div>
                <div className=""><StripeIcon /></div>
                <div className=""><PaypalIcon /></div>
            </div>
        </div>
    )
}

export default CartTotal