'use client'
import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem'
import { Arrowdown } from './Icons/Arrowdown'
import { getAllOrders } from '@/Services/getAllOrders.service'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { allOrderType } from './Types/allOrderType'

const AllOrders = () => {
    const[loading,setLoading]=useState(false);
    const [orders,setOrders]=useState<allOrderType[]>([])
    useEffect(()=>{
        setLoading(true);
        getAllOrders().then(({data})=>{
            setOrders(data);
        }).catch((err)=>ApiErrorResponse(err))
        setLoading(false)
    },[])
    console.log(orders);
    
    return (
        <div className="w-full no-scrollbar">
            <div>
                <div className="flex justify-between p-6 items-center">
                    <h1 className="font-bold text-xl">Orders</h1>
                    <button className="max-w-fit px-2 p-1 text-sm font-medium border rounded-md">Export</button>
                </div>
                <div className="flex items-center text-sm">
                    <button className="max-w-fit px-2 py-1 m-2   rounded-lg flex gap-1 items-center border">type<Arrowdown /></button>
                    <button className="max-w-fit px-2 py-1  m-2  rounded-lg flex gap-1 items-center border">status<Arrowdown /></button>
                    <button className="max-w-fit px-2 py-1  m-2  rounded-lg flex gap-1 items-center border">order date<Arrowdown /></button>
                </div>
            </div>
            <div className="relative overflow-x-scroll overflow-y-scroll h-full border-t">
                <table className="w-full table-fixed  text-left text-sm">
                    <thead className="text-gray-700 uppercase text-xs mb-3">
                        <th className="px-6 py-3">Order</th>
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">Customer</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Total</th>
                        <th className="px-6 py-3">Quantity</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Status</th>
                    </thead>
                    <tbody>
                        {
                            orders.map((order:allOrderType)=>(

                                <OrderItem key={order.prouduct_id} order={order}/>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllOrders