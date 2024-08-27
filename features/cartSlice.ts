import { cartType } from "@/components/Types/cartType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface  iniitaltype{
    cartitems:cartType[],
    Count:number
}
const initialState:iniitaltype={
    cartitems:[],
    Count:0
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCartItems:(state,action:PayloadAction<cartType[]>)=>{
            state.cartitems=action.payload
            return state;
            
        },
        setQuantity:(state,action:PayloadAction<[number,string]>)=>{
            const [quantity,_id]=action.payload
            state.cartitems.map((item:cartType)=>{
                if(item.cartItem_id===_id){
                    let tempQty=item.quantity;
                    if((tempQty+=quantity)!==0){
                         item.quantity+=quantity;
                         item.total=item.price*item.quantity;
                    }
                }
                return item;
            })
            
        },
        removeitem:(state,action:PayloadAction<string>)=>{
            state.cartitems.filter((item:cartType)=>item.cartItem_id!=action.payload);
            return state;
        },
        setCartCount:(state,action:PayloadAction<number>)=>{
            state.Count=action.payload;
            
            return state;
        }

    }
})

export const {setCartItems,setQuantity,removeitem,setCartCount}=cartSlice.actions
export default cartSlice.reducer;