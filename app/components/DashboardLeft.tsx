import React, { FC } from 'react'
import { CustomerIcon } from './Icons/Customericon'
import { ProductIcon } from './Icons/ProdcutIcon'
import { OrderIcon } from './Icons/OrderIcon'
import { MultiplyIcon } from './Icons/MultiplyIcon'
import { DashboardIcon } from './Icons/DasboardIcon'
import Link from 'next/link'

const DashboardLeft:FC = () => {
  return (
    <div className="basis-1/5 bg-black text-slate-50">
    <div className="flex justify-between  p-4 border-b-2">
        <h1 className="font-bold text-slate-50">Paircare</h1>
        <MultiplyIcon />
    </div>
    <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 p-3 m-2 rounded-sm">
        <DashboardIcon />
        <Link href='/dashboard' className="font-medium">Dashbord</Link>
    </div>
    <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 p-3 m-2 rounded-sm">
        <OrderIcon />
        <Link href='/dashboard/orders'  className="font-medium">Order</Link>
    </div>
    <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 p-3 m-2 rounded-sm">
        <ProductIcon/>
        <Link href='/dashboard/products'  className="font-medium">Products</Link>
    </div>
    <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 p-3 m-2 rounded-sm">
        <CustomerIcon/>
        <Link href='/dashboard/customerinformation'  className="font-medium">Customers</Link>
    </div>
</div>
  )
}

export default DashboardLeft