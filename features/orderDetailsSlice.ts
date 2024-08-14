import { orderDetailsType } from "@/components/Types/orderDetailType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState:orderDetailsType[]=[]
const orderDetailsSlice=createSlice({
    name:'orderDetails',
    initialState,
    reducers:{
        setOrderDetails:(state,action:PayloadAction<orderDetailsType[]>)=>{
            return action.payload;
        }
    }
})

export const {setOrderDetails}=orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;