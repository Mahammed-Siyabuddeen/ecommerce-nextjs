'use client'
import React, { useEffect } from 'react'
import { RazorpayIcon } from './Icons/RazorpayIcon'
import { StripeIcon } from './Icons/Stripe'
import { PaypalIcon } from './Icons/PaypalIcon'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/features/redux/store'
import { cartType } from './Types/cartType'
import { setCheckoutProduct, setCurrentComponent, setTotalAmount } from '@/features/checkoutSlice'
import { useRouter, usePathname } from 'next/navigation'

function CartTotal() {
    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter();
    const pathname = usePathname()

    const {cartitems} = useSelector((state: RootState) => state.cart)
    const checkout = useSelector((state: RootState) => state.checkout)
    
    function getTotalamount(): number {
        if (pathname === '/cart') {
            return cartitems.reduce((total: number, item: cartType) => total + item.total, 0)
        }
        return checkout.checkout_products.reduce((total: number, item: cartType) => total + item.total, 0)
    }

    useEffect(() => {
        dispatch(setTotalAmount(getTotalamount()))
    }, [getTotalamount, dispatch])

    const addtoCheckout = () => {
        dispatch(setCheckoutProduct(cartitems))
        router.push('/checkout')
    }
    const handleBilling = () => {
        dispatch(setCurrentComponent('billing'))
    }
    return (
        <div className="p-3 flex flex-col gap-4 border">
            <div>
                <h1 className='font-semibold text-xl'>Total</h1>
            </div>
            <div className="flex justify-between">
                <h2>Sub-Total</h2>
                <p className="text-slate-400">&#8377;{checkout.sub_total}</p>
            </div>
            <div className="flex justify-between">
                <h2>delivery</h2>
                <p className="text-slate-400">&#8377;{checkout.delivery_amount}</p>
            </div>
            <div className="flex justify-between font-bold">
                <h2 >Total</h2>
                <p className="text-slate-400">&#8377;{checkout.total_amount}</p>
            </div>
            <div>
                {
                    checkout.cuurentComponent === 'address' ?
                        (
                            <button type='submit' className="bg-yellow-400 p-3 w-full text-white">
                                Summary
                            </button>
                        )

                        : checkout.cuurentComponent == 'summary' ?
                            (
                                <button onClick={handleBilling} className="bg-yellow-400 p-3 w-full text-white">
                                    Billing
                                </button>
                            )
                            : <button onClick={addtoCheckout} className="bg-yellow-400 p-3 w-full text-white">
                                Check out
                            </button>
                }
            </div>
            <div className="flex justify-evenly">
                <div className=""><RazorpayIcon /></div>
                <div className=""><StripeIcon /></div>
                <div className=""><PaypalIcon /></div>
            </div>
        </div>
    )
}

export default CartTotal