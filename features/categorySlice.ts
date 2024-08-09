import { categoryCountType } from "@/components/Types/categoryCountType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:categoryCountType[]=[]

const categorySlice=createSlice({
    name:'categorywithcount',
    initialState,
    reducers:{
        setCategories:(state,action:PayloadAction<categoryCountType[]>)=>{
            return action.payload;
        },
        appendCategory:(state,action:PayloadAction<categoryCountType>)=>{
            state.push(action.payload)
        }
    }

})

export const {setCategories,appendCategory}=categorySlice.actions
export default categorySlice.reducer

