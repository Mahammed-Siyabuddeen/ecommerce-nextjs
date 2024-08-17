import {  allProductsType } from "@/components/Types/allProductsType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:allProductsType[]=[]


const allProductsSlice=createSlice({
    name:'allProducts',
    initialState,
    reducers:{
        setAllProdcuts:(state,action:PayloadAction<allProductsType[]>)=>{
            return action.payload;
        },
        appendToAllProducts:(state,action:PayloadAction<allProductsType>)=>{
            state.push(action.payload);
        },
        allProductSortBySales:(state,action:PayloadAction<string>)=>{
            if(action.payload=='asc')
               return state.sort((a,b)=>a.totalSale-b.totalSale)
            return state.sort((a,b)=>b.totalSale-a.totalSale)
        },
        allProductSortByQuanity:(state,action:PayloadAction<string>)=>{
            if(action.payload=='asc')
                return state.sort((a,b)=>a.stock_quantity-b.stock_quantity)
             return state.sort((a,b)=>b.stock_quantity-a.stock_quantity)
        },
    }
})
export const {setAllProdcuts,appendToAllProducts,allProductSortByQuanity,allProductSortBySales}=allProductsSlice.actions;
export default allProductsSlice.reducer;