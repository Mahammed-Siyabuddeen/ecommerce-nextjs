'useclient'
import { orderDetailsType } from '@/components/Types/orderDetailType'
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { orderDetailById } from '@/Services/orderDetailById'
import Image from 'next/image'
import Link from 'next/link'
import { OutlineStarIcon, StarIcon } from '@/components/Icons/StarIcon'
import OrderAddress from '@/components/OrderAddress'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'
import AddReview from './AddReview';

interface prop {
  order_id: string,
  orderitem_id: string
}
const OrderDetails = ({ order_id, orderitem_id }: prop) => {
  const [data, setData] = useState<orderDetailsType | undefined>(undefined)
  const [loading, setLoading] = useState(true);
  const [openReviewComponent, setOpenReviewComponent] = useState(false);

  const router = useRouter()
  useEffect(() => {
    orderDetailById({ order_id: order_id, orderitem_id: orderitem_id })
      .then(({ data }) => {
        setData(data);
        setLoading(false)
      }).catch((err) => {
        ApiErrorResponse(err);
        setLoading(false)
      })

  }, [])

  if (loading) return (<>Loading</>)
  if (typeof data === 'undefined') {
    router.push('/orders')
    return null;
  }


  return (
    <div className="container mx-auto rounded flex flex-col gap-4">
      <OrderAddress data={data} address={data.address} />
      <div className="flex justify-evenly items-center bg-gray-100 rounded">
        <Link href={`/productdetails/${data.product_id}`} className="basis-1/4 flex items-center">
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
              <p className='text-gray-700 text-sm'>shipped</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
              <p className='text-gray-700 text-sm'>out of delivery</p>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
              <p className='text-gray-700 text-sm'>delivered</p>
            </div>
          </div>
          <div className="w-full h-1 absolute top-1  bg-gray-700"></div>
          <div className={` h-1 absolute top-1  z-20 bg-green-700 ${data.status === 'delivered' ? 'w-full' : data.status === "out of delivery" ? 'w-3/4' : data.status === 'shipped' ? 'w-2/4' : 'w-1/4'}`}></div>

        </div>
        {
          openReviewComponent ?
             <AddReview orderitem_id={orderitem_id}/>
            : <div onClick={() => setOpenReviewComponent(true)} className="basis-1/4 cursor-pointer   flex items-center gap-2">
              <StarIcon />
              <p>Rate and Review Product</p>
            </div>
        }

      </div>
    </div>
  )
}
export default OrderDetails