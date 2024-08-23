import { orderDetailsType } from "@/components/Types/orderDetailType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface orderType {
    orders: orderDetailsType[],
    filter: string
}
const initialState: orderType = {
    orders: [],
    filter: "all"
}
const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers: {
        setOrderDetails: (state, action: PayloadAction<orderDetailsType[]>) => {
            state.orders = action.payload;
        },
        filterOrders: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case "ordered": state.filter = "ordered";
                    break;
                case "shipped": state.filter = "shipped"
                    break;
                case "out of delivery": state.filter = "out of delivery"
                    break;
                case "delivered": state.filter = "delivered"
                    break;
                case "canceled": state.filter = "canceled"
                    break;
                default: state.filter = "all"
            }
            return state;
        }
    }
})

export const { setOrderDetails, filterOrders } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;