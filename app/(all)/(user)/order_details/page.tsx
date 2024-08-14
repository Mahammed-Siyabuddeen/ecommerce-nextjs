import { StarIcon } from '@/components/Icons/StarIcon'
import OrderAddress from '@/components/OrderAddress'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className="container mx-auto rounded flex flex-col gap-4">
            <OrderAddress/>
            <div className="flex justify-evenly items-center bg-gray-100 rounded">
                <div className="basis-1/4 flex items-center">
                    <div className="relative w-24 h-24">
                        <Image fill src={'/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png'} alt='' />
                    </div>
                    <p>Boat Smart watches</p>
                </div>
                <div className="basis-2/4 relative mx-4 ">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3 items-start">
                            <div className="rounded-full w-3 h-3 bg-green-700 "></div>
                            <p className='text-green-700 text-sm'>Order Confirmed</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
                            <p className='text-gray-700 text-sm'>Order Confirmed</p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
                            <p className='text-gray-700 text-sm'>Order Confirmed</p>
                        </div>
                        <div className="flex flex-col gap-3 items-end">
                            <div className="rounded-full w-3 h-3 bg-gray-700 "></div>
                            <p className='text-gray-700 text-sm'>Order Confirmed</p>
                        </div>
                    </div>
                    <div className="w-full h-1 absolute top-1  bg-gray-700"></div>
                    <div className="w-1/4 h-1 absolute top-1  z-20 bg-green-700"></div>

                </div>
                <div className="basis-1/4  flex items-center gap-2">
                    <StarIcon />
                    <p>Rate and Review Product</p>
                </div>
            </div>
        </div>

    )
}

export default page