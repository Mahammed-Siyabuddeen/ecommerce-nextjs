import { dashboardType } from "@/components/Types/dashboardType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: dashboardType = {
    totalCustomers: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalSales: 0,
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setTotalCustomers: (state, action: PayloadAction<number>) => {
            state.totalCustomers = action.payload;
        },
        setTotalOrders: (state, action: PayloadAction<number>) => {
            state.totalOrders = action.payload;
        },
        setTotalProducts: (state, action: PayloadAction<number>) => {
            state.totalProducts = action.payload;
        },
        setTotalSales: (state, action: PayloadAction<number>) => {
            state.totalSales = action.payload;
        },
    }
})

export const {setTotalCustomers,setTotalOrders,setTotalProducts,setTotalSales} =dashboardSlice.actions;
export default dashboardSlice.reducer;
