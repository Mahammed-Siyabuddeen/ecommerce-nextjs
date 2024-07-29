import React from 'react'
import OrderItem from './OrderItem'
import { Arrowdown } from './Icons/Arrowdown'

const AllOrders = () => {
    return (
        <div className="basis-4/5">
            <div>
                <div className="flex justify-between p-6 items-center">
                    <h1 className="font-bold text-xl">Orders</h1>
                    <button className="max-w-fit px-2 p-1 text-sm font-medium border rounded-md">Export</button>
                </div>
                <div className="flex items-center text-sm">
                    <button className="max-w-fit px-2 py-1 m-2   rounded-lg flex gap-1 items-center border">type<Arrowdown /></button>
                    <button className="max-w-fit px-2 py-1  m-2  rounded-lg flex gap-1 items-center border">status<Arrowdown /></button>
                    <button className="max-w-fit px-2 py-1  m-2  rounded-lg flex gap-1 items-center border">order date<Arrowdown /></button>
                </div>
            </div>
            <div className="relative overflow-x-scroll overflow-y-scroll h-full border-t">
                <table className="w-full  text-left text-sm">
                    <thead className="text-gray-700 uppercase text-xs mb-3">
                        <th className="px-6 py-3">Order</th>
                        <th className="px-6 py-3">Customer</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Product</th>
                        <th className="px-6 py-3">Total</th>
                        <th className="px-6 py-3">Date</th>
                    </thead>
                    <tbody>
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />
                        <OrderItem Order={'#90893'} Customer={'chark mahn'} Type={'fd'} Status='Paid' Product='namdk' Total={450} Date='june 17' />

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllOrders