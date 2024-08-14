import { addressType } from "@/components/Types/addressType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState:addressType={
    name:'',
    city:'',
    country:'',
    phone:'',
    state:'',
    street:'',
    zipcode:''
}
const addressSlice=createSlice({
    name:'address',
    initialState,
    reducers:{
        setAddress:(state,action:PayloadAction<addressType>)=>{
            return action.payload;
        }
    }
})

export const {setAddress} =addressSlice.actions;
export default addressSlice.reducer;