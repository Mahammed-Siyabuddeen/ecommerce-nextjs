'use client'
import { addCategory } from '@/Services/category.service';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/redux/store';
import { appendCategory } from '@/features/categorySlice';
import { toast } from 'sonner';
import Processing from './Processing';


  
const AddCategory = () => {
    const dispatch=useDispatch<AppDispatch>();
    const  [categoryName,setCategoryName]=useState<string>('')
    const [loading,setLoading]=useState(false);
    const handleAddCategory = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        addCategory({ name: categoryName}).then(({ data }) => {
            dispatch(appendCategory({...data,totalProduct:0}))
            toast.success('catergory successully aded')   
        }).catch((error) => {
            ApiErrorResponse(error)
           
        }).finally(()=>setLoading(false))
       
    }
    return (
        <div className="w-2/4 p-6">
            <div className=" pb-6 text-xl font-semibold">Add Category</div>
            <form onSubmit={(e: FormEvent) => handleAddCategory(e)}>
                <input required value={categoryName} 
                onChange={(e:ChangeEvent<HTMLInputElement>)=>setCategoryName(e.target.value)} type="text" name='category' className="w-full border text-lg p-3 outline-none rounded" />
                {
                loading?
                <Processing/>
                :<button type='submit' className="bg-yellow-400 p-3 w-2/5 rounded m-3 text-white">Add</button>
                }
            </form>
        </div>
    )
}

export default AddCategory