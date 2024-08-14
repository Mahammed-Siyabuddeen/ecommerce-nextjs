'use client'
import React, { useState } from 'react'
import { ShopIcon } from './Icons/ShopIcon'
import Image from 'next/image'
import { productType } from './Types/productType'
import { addtocart } from '@/Services/cart.service'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/redux/store'
import ApiErrorResponse from '@/Services/ApiErrorResponse'

const ProductDetails = ({ productdetials }: { productdetials: productType }) => {
  const [currentImage, setCurrentImage] = useState<string>("/images/Lovepik_com-401775421-rhino-modeling-smart-watch.png")
  const user = useSelector((state: RootState) => state.user)
  const handleImageChange = () => {

  }
  const handleAddToCart = async() => {
    if (!user) return alert('please login');
    try {
      await addtocart({ product_id: productdetials._id, user_id: user._id })
    } catch (error) {
      ApiErrorResponse(error)
    }
  }
  console.log(productdetials);
  
  return (
    <div className=" flex items-center bg-orange-100">
      <div className="basis-2/4 bg-slate-100  h-dvh">
        <div className=' transition hover:scale-110 relative w-full p-20 h-3/4 overflow-hidden'>

          <Image fill loading='lazy' src={'https://res.cloudinary.com/dn1atq3py/image/upload/v1723204395/lyhgjz6c6m1vyb8dyz95.jpg'} alt="ds" />
        </div>
        <div className="grid w-full grid-cols-4 gap-3 px-5 h-1/5">
          {
            productdetials.imagesUrl.map((url: string) => (
              <div key={url} className='bg-slate-300 relative'>
                <Image fill loading='lazy' src={url} alt="" />
              </div>

            ))
          }
        </div>
      </div>
      <div className="basis-2/4 flex flex-col gap-4 px-6 ">
        <h1 className='text-4xl  font-bold '>{productdetials.name}</h1>
        <p>{productdetials.description}</p>
        <div className="flex gap-3 className='font-medium text-2xl">
          <p className='line-through text-slate-950 opacity-80'>&#8377; {productdetials.mrp}</p>
          <h2 >&#8377; {productdetials.price}</h2>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-3 max-w-fit font-medium gap-2 text-center inline-flex items-center text-gray-950 bg-yellow-400 rounded-lg hover:bg-slate-50  ">
            <ShopIcon />  Shop Now
          </button>
          <button onClick={handleAddToCart} className="px-5 py-3 max-w-fit font-medium gap-2 text-center inline-flex items-center text-gray-950 bg-yellow-400 rounded-lg hover:bg-orange-100  ">
            <ShopIcon />  Add To Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails