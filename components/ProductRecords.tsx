'use client'
import React, { useEffect, useState } from 'react'
import ProductRecord from './ProductRecord'
import { SearchIcon } from './Icons/SearchIcon'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/features/redux/store'
import { getAllProducts } from '@/Services/getAllProducts'
import { allProductSortByQuanity, allProductSortBySales, setAllProdcuts } from '@/features/allProductsSlice'
import { allProductsType } from './Types/allProductsType'
import { Arrowdown } from './Icons/Arrowdown'

interface prop{
    setAddproduct:React.Dispatch<React.SetStateAction<boolean>>
}
const ProductRecords = ({setAddproduct}:prop) => {
    const Dispatch=useDispatch<AppDispatch>()
    const [sortOrder,setSortOrder]=useState('asc')
    const orders=useSelector((state:RootState)=>state.allProducts)
    const switchToAddProduct=()=>{
        setAddproduct(true);
    }
    const changesortSales=()=>{
        Dispatch(allProductSortBySales(sortOrder))
        setSortOrder(sortOrder==='asc'?'desc':'asc')
    }
    const changesortQuantity=()=>{
        Dispatch(allProductSortByQuanity(sortOrder))
        setSortOrder(sortOrder==='asc'?'desc':'asc')

    }
    useEffect(()=>{
        getAllProducts().then(({data})=>{
            Dispatch(setAllProdcuts(data))
        }).catch((error)=>ApiErrorResponse(error))
    },[setAddproduct])

    return (
        <div className="w-full overflow-x-scroll">
                <div className="flex justify-between p-6 items-center">
                    <h1 className="font-bold text-xl">All Product</h1>
                </div>
                <div className="flex items-center justify-between text-sm mx-3">
                    <div className="basis-2/4 ">
                        <div className="flex w-4/5 border rounded-md overflow-hidden ">
                            <input placeholder='search product' type="text" className="w-4/5 border-r outline-none px-2" />
                            <button  className="w-1/5  p-2 bg-yellow-400 text-slate-950 text-2xl flex  justify-center  "><SearchIcon /></button>
                        </div>
                    </div>
                    <div className="flex gap-1">
                    <button onClick={changesortSales} className="max-w-fit px-4 py-2 bg-yellow-400 text-slate-950  m-2  rounded-lg flex gap-1 items-center border">Sales <div className="text-lg"><Arrowdown/></div></button>
                    <button onClick={changesortQuantity} className="max-w-fit px-4 py-2 bg-yellow-400 text-slate-950  m-2  rounded-lg flex gap-1 items-center border">Quantity<div className="text-lg"><Arrowdown/></div></button>
                    <button onClick={switchToAddProduct} className="max-w-fit px-2 py-2 bg-yellow-400 text-slate-950  m-2  rounded-lg flex gap-1 items-center border">Add Product</button>

                    </div>
                </div>
                <div className=" overflow-x-scroll m-4 box_shadow  overflow-y-scroll h-full border-t">
                    <table className="w-full  text-left overflow-x-scroll ">
                        <thead className="text-gray-700 border-b-2 uppercase   ">
                            <th className="px-6 py-3">Product</th>
                            <th className="px-6 py-3">ProdcutId</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Quantity</th>
                            <th className="px-6 py-3">Sale</th>
                        </thead>
                        <tbody className='overflow-x-scroll  mb-6'>
                            {
                                orders.map((item:allProductsType)=>(
                                    <ProductRecord productDetails={item} key={item._id} />

                                ))
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default ProductRecords