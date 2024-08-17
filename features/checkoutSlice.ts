import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState={
    total_amount:0,
    sub_total:0,
    delivery_amount:50
}

const checkoutSlice=createSlice({
    name:'checkout',
    initialState,
    reducers:{
        setTotalAmount:(state,action:PayloadAction<number>)=>{
            state.sub_total=action.payload;
            state.total_amount=state.delivery_amount+state.sub_total

        }
    }
})
 export const {setTotalAmount} =checkoutSlice.actions
export default checkoutSlice.reducer;