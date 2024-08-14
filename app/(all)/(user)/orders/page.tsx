'use client';
import { RoundIcon } from '@/components/Icons/RoundIcon'
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
    const orderDetails = useSelector((state: RootState) => state.orderDetails)
    const dispatch=useDispatch<AppDispatch>();
    useEffect(() => {
        if (!user._id.length) return;
        getOrderDetails({ user_id: user._id }).then(({ data }) => {
            dispatch(setOrderDetails(data))
                console.log(data);
                
        }).catch((error) => ApiErrorResponse(error))
    }, [user]);
    return (
        <div className="container mx-auto flex gap-4 h-full w-full my-12">
            <div className="basis-1/5 bg-gray-100 rounded">
                <OrderFilters />
            </div>
            <div className="basis-4/5 bg-gray-100 flex flex-col  gap-4 rounded p-4">
                <div className="flex w-4/5 items-center border  h-9 rounded overflow-hidden">
                    <input type="text" className='grow h-full px-2 outline-none' />
                    <button className="bg-blue-500 text-white h-full px-4">Search</button>
                </div>
                <>
                    {/* each order */}
                    {
                        orderDetails.map((order:orderDetailsType)=>(
                            <Order key={order._id} orderdata={order}/>
                        ))
                    }

                </>
            </div>
        </div>
    )
}

export default page