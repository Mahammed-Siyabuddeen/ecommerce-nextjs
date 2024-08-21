'use client';
import { StarIcon } from '@/components/Icons/StarIcon'
import OrderAddress from '@/components/OrderAddress'
import OrderDetails from '@/components/OrderDetails';
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

  return (
    <OrderDetails order_id={params.order_id} orderitem_id={params.orderitem_id}/>
  )
}

export default page