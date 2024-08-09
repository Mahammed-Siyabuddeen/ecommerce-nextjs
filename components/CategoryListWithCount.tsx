'use client'
import React, { useEffect, useState } from 'react'
import { categoryCountType } from './Types/categoryCountType'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch,RootState } from '@/features/redux/store'
import { setCategories } from '@/features/categorySlice'
import Loading from './Loading'

const CategoryListWithCount = ({ data }: { data: categoryCountType[] }) => {
    const[loading,setLoading]=useState(true)
    const dispatch = useDispatch<AppDispatch>();
    const categories=useSelector((state:RootState)=>state.category)
    useEffect(() => {
        setLoading(true)
        dispatch(setCategories(data))
        setLoading(false)
    }, [data, dispatch])
    
    if(loading) return <Loading/>
    return (
        <div className="w-2/4 border-r-2 ">
            <table className='w-full text-left'>
                <thead className='text-gray-700 uppercase mb-3'>
                    <th className="px-6 py-3">Catergory</th>
                    <th className="px-6 py-3">No.of products</th>
                </thead>
                <tbody>
                    {
                        categories.map((data: categoryCountType) => (
                            <tr key={data._id} className="hover:bg-slate-300 border-2 ">
                                <td className="px-6 py-3 border-r-2" >{data.name}</td>
                                <td className="px-6 py-3"> {data.totalProduct}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CategoryListWithCount