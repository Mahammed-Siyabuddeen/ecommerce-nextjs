import React from 'react'
import ProductDetails from '@/components/ProductDetails'
import { getProductDetails } from '@/Services/products.services'
import { productType } from '@/components/Types/productType';

const Page =async ({params}:{params:{id:string}}) => {
  const {data}:{data:productType}=await getProductDetails(params.id)
  
  return (
    <div>
      <ProductDetails productdetials={data}/>
    </div>
  )
}

export default Page
