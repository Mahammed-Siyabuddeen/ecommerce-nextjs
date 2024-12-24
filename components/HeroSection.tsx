'use client'
import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import { getBanners } from '@/Services/banner.services'
import BannerNextButton from './BannerNextButton'
import BannerPrevButton from './BannerPrevButton'

const HeroSection = () => {
    const [count, setCount] = useState(0)
    const [banners, setBanners] = useState<bannerType[]>([]);

    useEffect(() => {
        getBanners().then(({ data }) => setBanners(data))
    }, [])

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative  overflow-hidden rounded-lg ">
                {
                    banners.map((banner: bannerType, index) => (
                        <div key={banner._id} className={`duration-700 h-full ease-in-out ${index == count ? 'block' : 'hidden'}`} data-carousel-item>
                            <Slider banner={banner} />
                        </div>
                    ))
                }
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <BannerNextButton setCount={setCount} />
            <BannerPrevButton setCount={setCount} />
        </div>
    )
}

export default HeroSection