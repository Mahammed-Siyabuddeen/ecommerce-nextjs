import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartType } from "@/components/Types/cartType";


const initialState={
    total_amount:0,
    sub_total:0,
    delivery_amount:50,
    checkout_products:[] as cartType[],
    cuurentComponent:""
}

const checkoutSlice=createSlice({
    name:'checkout',
    initialState,
    reducers:{
        setTotalAmount:(state,action:PayloadAction<number>)=>{
            state.sub_total=action.payload;
            state.total_amount=state.delivery_amount+state.sub_total

        },
        setCheckoutProduct:(state,action:PayloadAction<cartType[]>)=>{
            state.checkout_products=action.payload
        },
        setCurrentComponent:(state,action:PayloadAction<string>)=>{
            switch(action.payload){
                case "address":state.cuurentComponent='address'
                    break;
                case "summary":state.cuurentComponent='summary'
                    break;
                case "billing":state.cuurentComponent='billing'
                    break;
                default :state.cuurentComponent=""
            }
        }
    }
})
 export const {setTotalAmount,setCheckoutProduct,setCurrentComponent} =checkoutSlice.actions
export default checkoutSlice.reducer;