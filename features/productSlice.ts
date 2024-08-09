import { getAllProductsapi } from "@/Services/products.services";
import { productType } from "@/components/Types/productType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


// const initialState:productType[]=[]
const initialState:productType[]=[]

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts:(state,action:PayloadAction<productType[]>)=>{
            return action.payload
        }
    }
})

export const {addProducts}=productSlice.actions
export default productSlice.reducer