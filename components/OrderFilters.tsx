'use client'
import { filterOrders } from '@/features/orderDetailsSlice'
import { AppDispatch } from '@/features/redux/store'
import React from 'react'
import { useDispatch } from 'react-redux'
const OrderFilters = () => {
    const Dispatch=useDispatch<AppDispatch>()

    const handleFilters = (value: string) => {
        Dispatch(filterOrders(value))
    }
    return (
        <>
            <h1 className='text-2xl font-medium p-4'>Filters</h1>
            <div className="px-4 border-y">
                <div className="flex justify-between items-center">
                <h2 className="font-medium p-2 uppercase ">order status</h2>
                <p onClick={()=>handleFilters("all")} className="text-yellow-400 cursor-pointer">clear </p>
                </div>
                <div className="flex-flex-col ">
                    <div className="flex gap-2 my-2">
                        <input name='filter' type="radio"  onClick={()=>handleFilters("delivered")} />
                        <p>Delivered</p>
                    </div>
                    <div onClick={()=>handleFilters("out of delivery")} className="flex gap-2 my-2 ">
                        <input name='filter' type="radio"  onClick={()=>handleFilters("out of delivery")} />
                        <p>On the way</p>
                    </div>
                    <div onClick={()=>handleFilters("shipped")} className="flex gap-2 my-2">
                        <input name='filter' type="radio"  onClick={()=>handleFilters("shipped")}/>
                        <p>shipped</p>
                    </div>
                    <div  className="flex gap-2 my-2">
                        <input name='filter' type="radio" onClick={()=>handleFilters("canceled")} />
                        <p>Cancelled</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderFilters