import { RoundIcon } from '@/components/Icons/RoundIcon'
import Order from '@/components/Order'
import OrderFilters from '@/components/OrderFilters'
import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto flex gap-4 h-full w-full my-12">
            <div className="basis-1/5 bg-gray-100 rounded">
                <OrderFilters />
            </div>
            <div className="basis-4/5 bg-gray-100 flex flex-col  gap-4 rounded p-4">
                <div className="flex w-4/5 items-center border  h-9 rounded overflow-hidden">
                    <input type="text" className='grow h-full px-2 outline-none' />
                    <button className="bg-blue-500 text-white h-full px-4">Search</button>
                </div>
                <>
                {/* each order */}
                <Order/>
                <Order/>
                <Order/>

                </>
            </div>
        </div>
    )
}

export default page