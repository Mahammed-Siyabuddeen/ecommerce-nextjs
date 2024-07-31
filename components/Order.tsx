import React from 'react'
import { RoundIcon } from './Icons/RoundIcon'
import Image from 'next/image'

const Order = () => {
    return (
        <div className="flex items-center w-full bg-white px-4">
            <div className="w-2/4 flex gap-4 items-center">
                <div className="relative w-24 h-24">
                    <Image fill src={'/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png'} alt='' />
                </div>
                <div className="flex flex-col my-2">
                    <h3 className="font-medium">Boat Smart watches</h3>
                    <p className="text-slate-500">Delivered</p>
                </div>
            </div>
            <div className="w-2/4 flex items-center justify-between">
                <p>&#8377; 200</p>
                <div className='flex gap-2 items-center'>
                    <div className="text-blue-500"> <RoundIcon /> </div>
                    <p>Delivered on jun 26th</p>
                </div>
            </div>
        </div>
    )
}

export default Order