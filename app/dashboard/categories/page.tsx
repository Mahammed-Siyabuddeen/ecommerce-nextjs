import { getAllCategory, getAllCategorywithProductCount } from '@/Services/category.service'
import AddCategory from '@/components/AddCategory'
import CategoryListWithCount from '@/components/CategoryListWithCount'
import { categoryCountType } from '@/components/Types/categoryCountType'
import { categoryType } from '@/components/Types/categoryType'
import { AppDispatch } from '@/features/redux/store'
import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = async () => {
    const { data }:{data:categoryCountType[]} = await getAllCategorywithProductCount()
    return (
        <div className="w-full overflow-y-scroll">
            <div className="flex justify-between p-6 items-center">
                <h1 className="font-bold text-xl">Category List</h1>
            </div>
            <div className="flex  border-t-2 ">
               <CategoryListWithCount data={data}/>
                <AddCategory />
            </div>
        </div>
    )
}

export default page