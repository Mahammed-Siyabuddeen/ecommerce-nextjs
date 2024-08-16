import { allOrderType } from "@/components/Types/allOrderType";
import { changeOrderStatusType } from "@/components/Types/changeOrderStatusType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialize } from "next/dist/server/lib/render-server";

const initialState:allOrderType[]=[]
interface prop{}
const adminOrderSlice=createSlice({
    name:'AllOrders',
    initialState,
    reducers:{
        setAllorders:(state,action:PayloadAction<allOrderType[]>)=>{
            return action.payload;  
        },
        setOrderstatus:(state,action:PayloadAction<changeOrderStatusType>)=>{
            state.map((item:allOrderType)=>{
                if(item._id==action.payload.order_id){
                    item.status=action.payload.status;
                }
                return item;
            })
        },
    }

})

export default adminOrderSlice.reducer;
export const  {setAllorders,setOrderstatus}=adminOrderSlice.actions

