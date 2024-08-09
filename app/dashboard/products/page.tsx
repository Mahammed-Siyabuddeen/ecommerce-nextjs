'use client';
import AddProduct from '@/components/AddProduct'
import ProductRecords from '@/components/ProductRecords'
import React, { useState } from 'react'

const Page = () => {
  const [addProduct, setAddproduct] = useState<boolean>(false)
console.log(addProduct);

  if (addProduct)
    return (<AddProduct />)

  return (
    <ProductRecords setAddproduct={setAddproduct} />
  )
}

export default Page