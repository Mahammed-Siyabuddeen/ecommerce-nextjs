'use client'
import React, { useEffect } from 'react'
import { SalesIcon } from './Icons/SalesIcon'
import { ProductIcon } from './Icons/ProdcutIcon'
import { CustomerIcon } from './Icons/Customericon'
import { OrderIcon } from './Icons/OrderIcon'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/features/redux/store'
import { getTotalCustomers, getTotalOrders, getTotalProducts, getTotalSales } from '@/Services/dashboard.services'
import { setTotalCustomers, setTotalOrders, setTotalProducts, setTotalSales } from '@/features/dashboardSlice'

const DashBoardHeader = () => {
    const dashboard = useSelector((state: RootState) => state.dashboard);
    const Dispatch = useDispatch()
    useEffect(() => {
        async function get() {

            try {
                const data = await Promise.all([getTotalSales(), getTotalProducts(), getTotalOrders(), getTotalCustomers()]);
                console.log(data)
                Dispatch(setTotalSales(data[0].data as number))
                Dispatch(setTotalProducts(data[1].data as number))
                Dispatch(setTotalOrders(data[2].data as number))
                Dispatch(setTotalCustomers(data[3].data as number))
            } catch (error) {
            }
        }
        get();
    }, [])
    return (
        <>
            <div className="p-8 items-center w-40 justify-evenly box_shadow  flex flex-col bg-white rounded ">
                <div className="text-4xl "><SalesIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">{dashboard.totalSales}</h1>
                <p className="text-sm text-gray-500">Total Sales</p>
            </div>
            <div className="p-8 items-center w-40 justify-evenly box_shadow   flex flex-col bg-white rounded  ">
                <div className="text-4xl "><ProductIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">{dashboard.totalProducts}</h1>
                <p className="text-sm text-gray-500">Total Products</p>
            </div>
            <div className="p-8 items-center w-40 justify-evenly box_shadow   flex flex-col bg-white rounded ">
                <div className="text-4xl "><CustomerIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">{dashboard.totalCustomers}</h1>
                <p className="text-sm text-gray-500">Customers</p>
            </div>
            <div className="p-8 items-center w-40 justify-evenly box_shadow   flex flex-col bg-white rounded  ">
                <div className="text-4xl "><OrderIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">{dashboard.totalOrders}</h1>
                <p className="text-sm text-gray-500"> Orders</p>
            </div>
        </>
    )
}

export default DashBoardHeader