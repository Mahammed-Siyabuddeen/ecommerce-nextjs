import React, { FC } from 'react'
import { ShopIcon } from './Icons/ShopIcon'
import Image from 'next/image'
import { ShopButton } from './ShopButton'

const Slider= ({banner}:{banner:bannerType}) => {
    return (
        <div className={`slider_bg h-full rounded-xl w-full container mx-auto my-3 flex `}>
            <div className="basis-2/4 flex flex-col justify-center gap-4 pl-16">
                <h1 className='text-3xl md:text-5xl font-bold'>{banner.heading}</h1>
                <h2 className='text-2xl md:text-4xl font-extrabold'>{banner.sub_heading}</h2>
           <ShopButton id={banner.product_id} />
            </div>
            <div className="basis-2/4 h-64 md:h-96 my-14 relative">
                <img className='max-h-full max-w-full' alt='' src={banner.image_url}  />
            </div>
        </div>
    )
}

export default Slider