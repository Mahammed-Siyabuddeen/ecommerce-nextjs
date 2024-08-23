import React, { FC, useEffect, useState } from 'react'
import Product from './Product'
import { productType } from './Types/productType'
import { getRelatedProducts } from '@/Services/getRelatedProducts.service'
import ApiErrorResponse from '@/Services/ApiErrorResponse'

interface prop {
  product_id: string,
  category_id: string
}
const SimilarProducts:FC<prop> = ({category_id,product_id}) => {
  const[products,setProducts]=useState<productType[]>([])
  useEffect(()=>{
    getRelatedProducts({category_id,product_id})
    .then(({data})=>setProducts(data))
    .catch((error)=>ApiErrorResponse(error));
  },[])
  if(!products.length) return<></>
  return (
    <div className=''>
      <h1 className=" font-semibold text-2xl py-2">Related Products</h1>
      <div className="grid  gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {
          products.map((item:productType)=>(
            <Product productinfo={item} />
          ))
        }

      </div>
    </div>
  )
}

export default SimilarProducts