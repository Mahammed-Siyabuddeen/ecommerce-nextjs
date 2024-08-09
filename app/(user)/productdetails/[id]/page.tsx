import React from 'react'
import ProductDetails from '@/components/ProductDetails'
import { getProductDetails } from '@/Services/products.services'
import { productType } from '@/components/Types/productType';

const Page =async ({params}:{params:{id:string}}) => {
  console.log(params.id);
  const {data}:{data:productType}=await getProductDetails(params.id)
  console.log(data);
  
  return (
    <div>
      <ProductDetails productdetials={data}/>
    </div>
  )
}

export default Page
