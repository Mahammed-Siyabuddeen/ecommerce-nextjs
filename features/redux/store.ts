import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../authSlice";
import categorySlice from "../categorySlice";
import productSlice from "../productSlice";
import cartSlice from "../cartSlice";
import checkoutSlice from "../checkoutSlice";
import addressSlice from "../addressSlice";
import orderDetailsSlice from "../orderDetailsSlice";
import AllOrders from "@/components/AllOrders";
import adminOrderSlice from "../adminOrderSlice";

export const store = configureStore({
    reducer: {
        user: authSlice,
        category:categorySlice,
        proudcts:productSlice,
        cart:cartSlice,
        checkout:checkoutSlice,
        address:addressSlice,
        orderDetails:orderDetailsSlice,
        AllOrders:adminOrderSlice
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch