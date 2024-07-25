import React, { FC } from 'react'
import { ShopIcon } from './Icons/ShopIcon'
import Image from 'next/image'

const Slider: FC = () => {
    return (
        <div className='slider_bg rounded-xl w-full container mx-auto my-3 bg-red-300 flex '>
            <div className="basis-2/4 flex flex-col justify-center gap-4 px-8">
                <h1 className='text-7xl font-bold'>New Year Sale off 2024</h1>
                <h2 className='text-5xl font-extrabold'>20% OFF</h2>
                <button className="px-5 py-3 w-32 font-medium gap-2 text-center inline-flex items-center text-black bg-white rounded-lg hover:bg-slate-50  ">
                  <ShopIcon/>  Large
                </button>
            </div>
            <div className="basis-2/4 relative">
                <img className='max-h-full max-w-full' alt='' src={'/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png'}  />
            </div>
        </div>
    )
}

export default Slider