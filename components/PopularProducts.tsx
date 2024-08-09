import Image from 'next/image'
import React, { FC } from 'react'
import { SemiStarIcon } from './Icons/StarIcon'
import Product from './Product'
import { productType } from './Types/productType'

const PopularProduct: FC = () => {
  let demodata: productType = {
    _id: 'uid8909',
    name: 'demo product',
    brand:'nike',
    category_id:'uoij',
    created_at:new Date(),
    description:'hwoo',
    imagesUrl:['fj','fdf'],
    mrp:980,
    price:29,
    sizes:['y','m'],
    stock_quantity:890
  }
  return (
    <div className='container mx-auto py-3'>
      <h1 className=" font-semibold text-2xl py-2">Popular Products</h1>
      <div className="grid  gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <Product productinfo={demodata} color='gray' />
        <Product productinfo={demodata} color='gray' />
        <Product productinfo={demodata} color='gray' />
        <Product productinfo={demodata} color='gray' />




      </div>
    </div>
  )
}

export default PopularProduct