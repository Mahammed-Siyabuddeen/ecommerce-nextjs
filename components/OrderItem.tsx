import React, { FC } from 'react'
import { allOrderType } from './Types/allOrderType'

const OrderItem: FC = ({ order }: { order: allOrderType }) => {
  return (
    <tr className="hover:bg-slate-400 text-xs w-full relative">
      <td className=" truncate w-6 px-6 py-3" >{order._id}</td>
      <td className=" truncate w-6 px-6 py-3" >{order.product_name}</td>
      <td className=" truncate w-6 px-6 py-3" >{order.customer_name}</td>
      <td className=" truncate w-6 px-6 py-3" >{order.customer_email}</td>
      <td className=" truncate w-6 px-6 py-3" >{order.product_total}</td>
      <td className=" truncate w-6 px-6 py-3" >{order.product_quantity}</td>
      <td className=" truncate w-6 px-6 py-3" >{ new Date(order.create_at).toLocaleDateString('en-US',{ day: '2-digit', month: '2-digit' })}</td>
      <td className=" truncate w-6 px-6 py-3" >{order.status}</td>
    </tr>
  )
}

export default OrderItem

