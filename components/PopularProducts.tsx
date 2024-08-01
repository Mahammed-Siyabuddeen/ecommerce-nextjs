import Image from 'next/image'
import React, { FC } from 'react'
import { SemiStarIcon } from './Icons/StarIcon'
import Product from './Product'

const PopularProduct:FC = () => {
  return (
    <div className='container mx-auto py-3'>
    <h1 className=" font-semibold text-2xl py-2">Popular Products</h1>
    <div className="grid  gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      <Product color='gray'/>
      <Product color='gray'/>
      <Product color='gray'/>
      <Product color='gray'/>
        
        
        
       
    </div>
</div>
  )
}

export default PopularProduct