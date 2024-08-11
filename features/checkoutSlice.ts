import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState={
    total_amount:0
}
const checkoutSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        setTotalAmount:(state,action:PayloadAction<number>)=>{
            state.total_amount=action.payload;
        }
    }
})
 export const {setTotalAmount} =checkoutSlice.actions
export default checkoutSlice.reducer;