'use client'
import React, { FC } from 'react'
import SimpleAreaChart from '../components/SimpleAreaChart'
import DashBoardHeader from '../components/DashBoardHeader'
import ProductCategorychart from '../components/ProductCategorychart'


let ProductChartData=[
    { name: 'Toys', value: 350 },
    { name: 'Boys Clothes', value: 300 },
    { name: 'Grils Clothes', value: 300 },
    { name: 'Furniture', value: 200 },
]
let CustomerChartData=[
    { name: 'banglore', value: 1350 },
    { name: 'mumbai', value: 4500 },
    { name: 'chennai', value: 3500 },
    { name: 'dehli', value: 2000 },
]
const Page: FC = () => {
    return (
        <div className="basis-4/5 flex flex-col gap-5  p-4 pt-8   bg-gray-100 overflow-y-scroll ">
            <div className="flex min-h-40 w-full  justify-evenly ">
                <DashBoardHeader />
            </div>
            <div className="w-full min-h-96 overflow-hidden">
                <h1 className="font-bold text-2xl my-3">Sales</h1>
                <SimpleAreaChart />
            </div>
            <div className="flex item-center">
                <div className="w-full h-96">
                    <h1 className="font-bold text-2xl my-3">Products </h1>

                    <ProductCategorychart data={ProductChartData}/>
                </div>
                <div className="w-full h-96">
                <h1 className="font-bold text-2xl my-3">Customers </h1>
                    <ProductCategorychart data={CustomerChartData}/>
                </div>
            </div>

        </div>
    )
}

export default Page