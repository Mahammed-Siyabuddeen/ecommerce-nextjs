import React from 'react'
import { SalesIcon } from './Icons/SalesIcon'
import { ProductIcon } from './Icons/ProdcutIcon'
import { CustomerIcon } from './Icons/Customericon'
import { OrderIcon } from './Icons/OrderIcon'

const DashBoardHeader = () => {
    return (
        <>
            <div className="p-8 items-center justify-evenly  flex flex-col bg-white rounded ">
                <div className="text-4xl "><SalesIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">345.78</h1>
                <p className="text-sm text-gray-500">Total Sales</p>
            </div>
            <div className="p-8 items-center justify-evenly  flex flex-col bg-white rounded  ">
                <div className="text-4xl "><ProductIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">345.78</h1>
                <p className="text-sm text-gray-500">Total Products</p>
            </div>  <div className="p-8 items-center justify-evenly  flex flex-col bg-white rounded ">
                <div className="text-4xl "><CustomerIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">345.78</h1>
                <p className="text-sm text-gray-500">Customers</p>
            </div>  <div className="p-8 items-center justify-evenly  flex flex-col bg-white rounded  ">
                <div className="text-4xl "><OrderIcon className='text-blue-500' /></div>
                <h1 className="font-bold text-3xl">345.78</h1>
                <p className="text-sm text-gray-500"> Orders</p>
            </div>
        </>
    )
}

export default DashBoardHeader