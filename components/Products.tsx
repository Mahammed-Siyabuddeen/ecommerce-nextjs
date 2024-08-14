'use client'
import React, {  useEffect } from 'react'
import { SemiStarIcon } from './Icons/StarIcon'
import Image from 'next/image'
import Product from './Product'
import { productType } from './Types/productType'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/features/redux/store'
import { addProducts } from '@/features/productSlice'

const Products= ({products}:{products:productType[]}) => {
    const dispatch=useDispatch<AppDispatch>()
    const data=useSelector((state:RootState)=>state.proudcts)
    console.log(data);
    
    useEffect(()=>{
        dispatch(addProducts(products))
    },[dispatch,products])
    return (
        <div className='container mx-auto py-3'>
            <h1 className=" font-semibold text-2xl py-2"> Products</h1>
            <div className="grid  gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                {
                    data.map((item:productType)=>(
                        <Product key={item._id} color='white' productinfo={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products