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
import { cancelOrder } from '@/Services/cancleOrder.service';
import OrderStatusBar from './OrderStatusBar';

interface prop {
  order_id: string,
  orderitem_id: string
}
const OrderDetails = ({ order_id, orderitem_id }: prop) => {
  const [data, setData] = useState<orderDetailsType | undefined>(undefined)
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(data?.status)
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
  }, [order_id,orderitem_id])

  if (loading) return (<>Loading</>)
  if (typeof data === 'undefined') {
    router.push('/orders')
    return null;
  }
  const handleCancelOrder = () => {
    cancelOrder({ order_id })
      .then(() =>
        setData((prevdata: orderDetailsType | undefined) => {
          if (!prevdata) return prevdata;
          return { ...prevdata, status: "canceled" }
        })
      )
      .catch((error) => ApiErrorResponse(error))
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
          <OrderStatusBar status={data.status} />
        </div>
        {
          openReviewComponent && data.status == 'delivered' ?
            <AddReview setOpenReviewComponent={setOpenReviewComponent} orderitem_id={orderitem_id} />
            : <div className='flex flex-col gap-2'>
              <button disabled={(data.status == "canceled"||data.status == "delivered") ? true : false} onClick={handleCancelOrder} className="px-4 py-2 w-fit text-white rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-red-400">cancel</button>
              <div onClick={() => setOpenReviewComponent(true)} className="basis-1/4 cursor-pointer   flex items-center gap-2">
                <StarIcon />
                <p>Rate and Review Product</p>
              </div>
            </div>
        }

      </div>
    </div>
  )
}
export default OrderDetails