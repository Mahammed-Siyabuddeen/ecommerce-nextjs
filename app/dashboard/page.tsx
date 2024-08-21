'use client'
import React, { FC, useEffect, useState } from 'react'
import SimpleAreaChart from '../../components/SimpleAreaChart'
import DashBoardHeader from '../../components/DashBoardHeader'
import ProductCategorychart from '../../components/ProductCategorychart'
import { productByCategoryType } from '@/components/Types/productByCategoryType'
import { getOrderByCity, getProductByCategories } from '@/Services/dashboard.services'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { orderByCity } from '@/components/Types/orderByCityType'
import OrderCityChart from '@/components/OrderCityChart'


let ProductChartData = [
    { name: 'Toys', value: 350 },
    { name: 'Boys Clothes', value: 300 },
    { name: 'Grils Clothes', value: 300 },
    { name: 'Furniture', value: 200 },
]
let CustomerChartData = [
    { name: 'banglore', value: 1350 },
    { name: 'mumbai', value: 4500 },
    { name: 'chennai', value: 3500 },
    { name: 'dehli', value: 2000 },
]
const Page: FC = () => {
    const [productByCategoryData, setProductByCategoryData] = useState<productByCategoryType[]>([])
    const [orderByCityData, setOrderByCityData] = useState<orderByCity[]>([])
    useEffect(() => {
        async function get() {
            try {
                const promiseData = await Promise.all([getProductByCategories(), getOrderByCity()])
                setProductByCategoryData(promiseData[0].data)
                setOrderByCityData(promiseData[1].data)
            } catch (error) {
            }
        }
        get();
    }, [])

    return (
        <div className="w-full flex flex-col gap-5  p-4 pt-8   overflow-y-scroll ">
            <div className="flex min-h-40 w-full  justify-evenly ">
                <DashBoardHeader />
            </div>
            <div className="w-11/12 h-auto  m-4 box_shadow rounded-lg">
                <h1 className="font-bold text-2xl px-4 my-3">Sales</h1>
                <h2 className="font-semibold text-end p-3">sales by month</h2>
                <div className="min-h-96  w-full ">
                    <div className="relative overflow-hidden w-full h-80 ">
                        <SimpleAreaChart />
                    </div>

                </div>

            </div>
            <div className="flex item-center">
                <div className="w-full h-96 m-4 box_shadow p-4 rounded-lg">
                    <h1 className="font-bold text-2xl my-1">Products </h1>

                    <ProductCategorychart data={productByCategoryData} />
                </div>
                <div className="w-full h-96 m-4 box_shadow p-4 rounded-lg">
                    <h1 className="font-bold text-2xl my-1">Customers </h1>
                    <OrderCityChart data={orderByCityData} />
                </div>
            </div>

        </div>
    )
}

export default Page