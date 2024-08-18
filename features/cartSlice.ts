import { cartType } from "@/components/Types/cartType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState:cartType[]=[]
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCartItems:(state,action:PayloadAction<cartType[]>)=>{
            return action.payload;
            
        },
        setQuantity:(state,action:PayloadAction<[number,string]>)=>{
            const [quantity,_id]=action.payload
            console.log(quantity,_id);
            
            state.map((item:cartType)=>{
                if(item.cartItem_id===_id){
                    console.log(item._id,_id);
                    
                    let tempQty=item.quantity;
                    if((tempQty+=quantity)!==0){
                         item.quantity+=quantity;
                         item.total=item.price*item.quantity;
                    }
                }
                return item;
            })
            console.log(action.payload,state);
            
        },
        removeitem:(state,action:PayloadAction<string>)=>{
           return state.filter((item:cartType)=>item.cartItem_id!=action.payload);
        },


    }
})

export const {setCartItems,setQuantity,removeitem}=cartSlice.actions
export default cartSlice.reducer;