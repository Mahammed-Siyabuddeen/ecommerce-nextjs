import React from 'react'
import { RoundIcon } from './Icons/RoundIcon'
import Image from 'next/image'
import { orderDetailsType } from './Types/orderDetailType'
import Link from 'next/link'

const Order = ({ orderdata }: { orderdata: orderDetailsType }) => {
    return (
        <Link href={`/order_details/${orderdata._id}/${orderdata.orderItemId}`}>
        <div className="flex items-center w-full bg-white px-4">
            <div className="w-2/4 flex gap-4 items-center">
                <div className="relative w-24 h-24 m-3">
                    <Image fill src={orderdata.productImage[0]} alt='' />
                </div>
                <div className="flex flex-col my-2">
                    <h3 className="font-medium">{orderdata.productName}</h3>
                    {/* <p className="text-slate-500">{orderdata.status}</p> */}
                </div>
            </div>
            <div className="w-2/4 flex items-center justify-between">
                <p>&#8377; {orderdata.totalPrice}</p>
                <p> {orderdata.quantity}</p>
                <div className='flex gap-2 items-center'>
                    <p>{orderdata.status}</p>
                    <div className="text-blue-500"> <RoundIcon /> </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Order