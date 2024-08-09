import Image from 'next/image'
import React, { FC } from 'react'
import { SemiStarIcon } from './Icons/StarIcon'
import { productType } from './Types/productType'


const Product = ({ color, productinfo }: { color: string, productinfo: productType }) => {
  if (!productinfo) return <>proudct not found</>
  return (
    <div className="p-3 rounded-sm">
      <div className={`h-64  relative ${color == "white" ? 'bg-white' : 'bg-slate-200'}`}>
        <Image fill className=' ' src="/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png" alt="" />
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='font-semibold pt-2'>{productinfo.name}</h3>
        <p className='text-sm text-slate-800 font-semibold'>{productinfo.brand}</p>
        <div className="flex  items-center">
          <div className='flex gap-1 items-center pr-3 border-r-2 '><span className='text-yellow-600 text-xl'><SemiStarIcon /></span> 4.5</div>
          <div className='pl-3' >4500 sold</div>
        </div>
        <div className="flex gap-3">
          <p className='line-through text-slate-950 opacity-80'>&#8377;{productinfo.mrp}</p>
          <p>&#8377; {productinfo.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product