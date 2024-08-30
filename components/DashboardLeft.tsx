'use client'
import React, { FC } from 'react'
import { CustomerIcon } from './Icons/Customericon'
import { ProductIcon } from './Icons/ProdcutIcon'
import { OrderIcon } from './Icons/OrderIcon'
import { MultiplyIcon } from './Icons/MultiplyIcon'
import { DashboardIcon } from './Icons/DasboardIcon'
import Link from 'next/link'
import { CatergoryIcon } from './Icons/CategoryIcon'
import { BannerIcon } from './Icons/BannerIcon'
import { AdminIcon } from './Icons/AdminIcon'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/features/redux/store'
import { clearAdmin } from '@/features/adminSlice'
import { useRouter } from 'next/navigation'

const DashboardLeft: FC = () => {
    const Dispatch = useDispatch<AppDispatch>();
    const router=useRouter()
    const handleAdminLogout = () => {
        if(!window.confirm("Are you sure you want to log out?"))  return;
        Dispatch(clearAdmin())
        router.push("/");
    }
    return (
        <div className="basis-1/5 bg-yellow-400 text-gray-950">
            <div className="flex justify-between  p-4 border-b-2">
                <h1 className="font-bold text-slate-950">Paircare</h1>
                <MultiplyIcon />
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 p-3 m-2 rounded-sm">
                <DashboardIcon />
                <Link href='/dashboard' title='dashboard' className="font-medium">Dashbord</Link>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 p-3 m-2 rounded-sm">
                <OrderIcon />
                <Link href='/dashboard/orders' title='orders' className="font-medium">Order</Link>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 p-3 m-2 rounded-sm">
                <ProductIcon />
                <Link href='/dashboard/products' title='products' className="font-medium">Products</Link>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 p-3 m-2 rounded-sm">
                <CustomerIcon />
                <Link href='/dashboard/customerinformation' title='customers' className="font-medium">Customers</Link>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 p-3 m-2 rounded-sm">
                <div > <CatergoryIcon /></div>
                <Link href='/dashboard/categories' title='categories' className="font-medium">Categories</Link>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 p-3 m-2 rounded-sm">
                <div > <BannerIcon /></div>
                <Link href='/dashboard/banners' title='banners' className="font-medium">Banners</Link>
            </div>
            <div onClick={handleAdminLogout} className="flex gap-1 items-center cursor-pointer hover:bg-slate-200 p-3 m-2 rounded-sm">
                <div > <AdminIcon /></div>
                <p title='logout'>Logout</p>
            </div>
        </div>
    )
}

export default DashboardLeft