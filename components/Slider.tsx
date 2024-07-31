import React, { FC } from 'react'
import { ShopIcon } from './Icons/ShopIcon'
import Image from 'next/image'
import { ShopButton } from './ShopButton'

const Slider: FC = () => {
    return (
        <div className='slider_bg rounded-xl w-full container mx-auto my-3 bg-red-300 flex '>
            <div className="basis-2/4 flex flex-col justify-center gap-4 px-8">
                <h1 className='text-7xl font-bold'>New Year Sale off 2024</h1>
                <h2 className='text-5xl font-extrabold'>20% OFF</h2>
           <ShopButton/>
            </div>
            <div className="basis-2/4 relative">
                <img className='max-h-full max-w-full' alt='' src={'/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png'}  />
            </div>
        </div>
    )
}

export default Slider