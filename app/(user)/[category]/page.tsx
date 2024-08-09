import { getAllProductsapi } from '@/Services/products.services';
import { Arrowdown } from '@/components/Icons/Arrowdown'
import Products from '@/components/Products'
import { productType } from '@/components/Types/productType';
import React, { FC } from 'react'

const page =async ({params}:{params:{category:string}}) => {
    
    const {data}:{data:productType[]}=await getAllProductsapi();
    console.log(data);
    
    return (
        <div className="container mx-auto flex gap-4 h-full w-full my-12">
            <div className="basis-1/5 bg-gray-100  rounded flex flex-col  ">
                <div className="w-full p-4 flex justify-between">
                    <h1 className="font-medium">Filter</h1>
                    <button className='text-yellow-500'>Clear All</button>
                </div>
                <div className="w-full p-4  text-sm flex flex-col  gap-3 border">
                    <div className="flex justify-between">
                        <p>Price</p>
                        <button className='text-yellow-500'>Clear</button>
                    </div>
                    <input type="range" className='w-full' />
                </div>
                <div className="w-full p-4 text-sm flex justify-between border">
                    <p>BRAND</p>
                    <Arrowdown/>
                </div>
                <div className="w-full p-4 text-sm  flex justify-between border">
                    <p>SIZE</p>
                    <Arrowdown/>
                </div>
                <div className="w-full p-4 text-sm flex justify-between border">
                    <p>DISCOUNT</p>
                    <Arrowdown/>
                </div>
                <div className="w-full p-4 text-sm flex justify-between border">
                    <p>CUSTOMER RATING</p>
                    <Arrowdown/>
                </div>
            </div>
            <div className="basis-4/5 bg-gray-100 flex flex-col  gap-4 rounded p-4">
                <>
                    {/* each order */}
                    <Products products={data}/>

                </>
            </div>
        </div>
    )
}

export default page