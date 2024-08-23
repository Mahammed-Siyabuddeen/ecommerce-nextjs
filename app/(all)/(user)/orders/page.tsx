'use client';
import Order from '@/components/Order'
import OrderFilters from '@/components/OrderFilters'
import { orderDetailsType } from '@/components/Types/orderDetailType';
import { setOrderDetails } from '@/features/orderDetailsSlice';
import { AppDispatch, RootState } from '@/features/redux/store';
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { getOrderDetails } from '@/Services/orders.service';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const user = useSelector((state: RootState) => state.user)
    const { filter, orders } = useSelector((state: RootState) => state.orderDetails)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (!user._id.length) return;
        getOrderDetails({ user_id: user._id }).then(({ data }) => {
            dispatch(setOrderDetails(data))
            console.log(data);

        }).catch((error) => ApiErrorResponse(error))
    }, [user]);

    const filteredOrders = orders.filter((item) => {
        if (filter === 'all') return true;
        return item.status === filter;
    })
    console.log(filter);
    
    return (
        <div className="container mx-auto flex gap-4 h-full w-full my-12">
            <div className="basis-1/5 bg-gray-100 rounded">
                <OrderFilters />
            </div>
            <div className="basis-4/5 bg-gray-100 flex flex-col  gap-4 rounded p-4">
                <>
                    {/* each order */}
                    {
                        filteredOrders.map((order: orderDetailsType) => (
                            <Order key={order._id} orderdata={order} />
                        ))
                    }

                </>
            </div>
        </div>
    )
}

export default page