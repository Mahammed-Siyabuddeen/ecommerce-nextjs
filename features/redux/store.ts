import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../authSlice";
import categorySlice from "../categorySlice";
import productSlice from "../productSlice";
import cartSlice from "../cartSlice";

export const store = configureStore({
    reducer: {
        user: authSlice,
        category:categorySlice,
        proudcts:productSlice,
        cart:cartSlice
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch