'use client'
import React, { useEffect, useState } from 'react'
import OrderItem from './OrderItem'
import { Arrowdown } from './Icons/Arrowdown'
import { getAllOrders } from '@/Services/getAllOrders.service'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { allOrderType } from './Types/allOrderType'
import PopupOrderDetails from './PopupOrderDetails'
import { useDispatch, useSelector } from 'react-redux'
import { setAllorders, sortArray, sortarrayByStatus } from '@/features/adminOrderSlice'
import { RootState } from '@/features/redux/store'

const AllOrders = () => {
    const dispatch = useDispatch()
    const allOrders = useSelector((state: RootState) => state.allOrders)
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const [sortorder, setSortOrder] = useState('asc');
    const [currentOrder, setCurrentOrder] = useState<allOrderType>()
    useEffect(() => {
        setLoading(true);
        getAllOrders().then(({ data }) => {
            dispatch(setAllorders(data))
        }).catch((err) => ApiErrorResponse(err))
        setLoading(false)
    }, [])
  
    const changeOrder=()=>{
        dispatch(sortArray(sortorder))
        setSortOrder(sortorder==='asc'?'desc':'asc')
    }
    const changeOrderByStatus=()=>{
        dispatch(sortarrayByStatus(sortorder))
        setSortOrder(sortorder==='asc'?'desc':'asc')
    }
    return (
        <div className="w-full no-scrollbar">
            <div className="px-6">
                <div className="flex justify-between py-6 items-center">
                    <h1 className="font-bold text-xl">Orders</h1>
                </div>
                <div className="flex items-center ">
                    <button onClick={changeOrderByStatus} className="text-lg  max-w-fit px-2  py-2  m-2  rounded-lg flex gap-1 items-center border bg-yellow-400  hover:bg-yellow-500">status<Arrowdown /></button>
                    <button onClick={changeOrder} className="text-lg max-w-fit px-2 py-2  m-2  rounded-lg flex gap-1 items-center border bg-yellow-400  hover:bg-yellow-500">order date<Arrowdown /></button>
                </div>
            </div>
            <div className="relative  overflow-x-scroll overflow-y-scroll h-3/4 mb-10 rounded-lg border-t box_shadow m-4 mx-6">
                <table className="w-full table-fixed  text-left  ">
                    <thead className="text-gray-700 uppercase border-b-2 mb-3">
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
                        {allOrders.map((order: allOrderType) => (
                            <OrderItem setCurrentOrder={setCurrentOrder} setIsopen={setIsOpen} key={order.prouduct_id} order={order} />
                        ))
                        }

                    </tbody>
                </table>
                <PopupOrderDetails currentOrder={currentOrder} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}

export default AllOrders