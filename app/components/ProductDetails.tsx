import React, { useState } from 'react'
import { ShopIcon } from './Icons/ShopIcon'
import Image from 'next/image'

const ProductDetails = () => {
    const [currentImage, setCurrentImage] = useState<string>("/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png")

  const handleImageChange = () => {

  }
  return (
    <div className=" flex items-center bg-gray-50">
    <div className="basis-2/4 bg-slate-100  h-dvh">
      <div className=' transition hover:scale-110 relative w-full p-20 h-3/4 overflow-hidden'>

        <Image  fill src={currentImage} alt="ds" />
      </div>
      <div className="grid w-full grid-cols-4 gap-3 px-5 h-1/5">
        <div className='bg-slate-300 relative'><Image fill src="/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png" alt="" /></div>
        <div className='bg-slate-300 relative'><Image fill src="/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png" alt="" /></div>
        <div className='bg-slate-300 relative'><Image fill src="/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png" alt="" /></div>
        <div className='bg-slate-300 relative'><Image fill src="/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png" alt="" /></div>
      </div>
    </div>
    <div className="basis-2/4 flex flex-col gap-4 px-6 ">
      <h1 className='text-4xl  font-bold '>Product Name will be Here</h1>
      <p>this is dex To create an input field with a border that gets removed when the user clicks on it, you can use HTML, CSS, and JavaScript. Here s a simple example to demonstrate this:</p>
      <div className="flex gap-3 className='font-medium text-2xl">
        <p className='line-through text-slate-950 opacity-80'>&#8377; 30</p>
        <h2 >&#8377; 24</h2>
      </div>
      <button className="px-5 py-3 max-w-fit font-medium gap-2 text-center inline-flex items-center text-black bg-slate-100 rounded-lg hover:bg-slate-50  ">
        <ShopIcon />  Shoop Now
      </button>
    </div>
  </div>
  )
}

export default ProductDetails