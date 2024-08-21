
import React, { FC } from 'react'
import Product from './Product'
import { productType } from './Types/productType'
import  { AxiosResponse } from 'axios'
import { getPopularProducts } from '@/Services/getPopularProudct.service'

const PopularProduct: FC = async () => {
  const { data }: AxiosResponse<productType[]> = await getPopularProducts();
  return (
    <div className='container mx-auto py-3'>
      <h1 className=" font-semibold text-2xl py-2">Popular Products</h1>
      <div className="grid  gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {
          data.map((product: productType) => (
            <Product productinfo={product} />
          ))
        }
      </div>
    </div>
  )
}
export default PopularProduct