'use client';
import { StarIcon } from '@/components/Icons/StarIcon'
import OrderAddress from '@/components/OrderAddress'
import { orderDetailsType } from '@/components/Types/orderDetailType'
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { orderDetailById } from '@/Services/orderDetailById'
import Image from 'next/image'
import Link from 'next/link'
import { useParams,useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface prop{
    order_id:string,
    orderitem_id:string
}
const page = ({params}:{params:prop}) => {
   const[data,setData]=useState<orderDetailsType>()
   const [loading,setLoading]=useState(true)
    const router=useRouter()
   useEffect(()=>{
             orderDetailById({order_id:params.order_id,orderitem_id:params.orderitem_id})
             .then(({data})=>{
                setData(data);
                setLoading(false)
             }).catch((err)=>{
                ApiErrorResponse(err);
                setLoading(false)
             })

   },[data])

   if(loading) return<>Loading</>
   if(typeof data==='undefined') return router.push('/orders')
  return (
    <div className="container mx-auto rounded flex flex-col gap-4">
            <OrderAddress address={data.address}/>
            <div className="flex justify-evenly items-center bg-gray-100 rounded">
                <Link href={`/productdetails/${data.product_id}`}  className="basis-1/4 flex items-center">
                    <div className="relative w-24 h-24 m-3">
                        <Image fill src={data.productImage[0]} alt='' />
                    </div>
                    <p>{data.productName}</p>
                </Link>
                <div className="basis-2/4 relative mx-4 ">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3 items-start">
                            <div className="rounded-full w-3 h-3 bg-green-700 "></div>
                            <p className='text-green-700 text-sm'>Order Confirmed</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
                            <p className='text-gray-700 text-sm'>Order Confirmed</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
                            <p className='text-gray-700 text-sm'>Order Confirmed</p>
                        </div>
                        <div className="flex flex-col gap-3 items-end">
                            <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
                            <p className='text-gray-700 text-sm'>Order Confirmed</p>
                        </div>
                    </div>
                    <div className="w-full h-1 absolute top-1  bg-gray-700"></div>
                    <div className="w-1/4 h-1 absolute top-1  z-20 bg-green-700"></div>

                </div>
                <div className="basis-1/4  flex items-center gap-2">
                    <StarIcon />
                    <p>Rate and Review Product</p>
                </div>
            </div>
        </div>
  )
}

export default page