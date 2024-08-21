import { adminType } from "@/components/Types/adminType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { Payload } from "recharts/types/component/DefaultLegendContent";

const initialState = (): adminType => {
    if (typeof window !== 'undefined') {
        const storedState = window.localStorage.getItem('adminProfile')
        if (storedState) {
            const admin: adminType = JSON.parse(storedState)
            console.log(admin.token);
            const token = jwtDecode(admin.token);
            if ((token.exp as number) * 1000 < new Date().getTime()) {
                localStorage.removeItem('adminProfile');
            } else {
                return admin;
            }
        }
    }
    return { email: "", name: "", token: "" }

}
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin: (state, action: PayloadAction<adminType>) => {
            localStorage.setItem("adminProfile", JSON.stringify(action.payload))
            return action.payload;
        },
        clearAdmin: (state, action: PayloadAction) => {
            localStorage.removeItem("adminProfile");
            return;
        }
    }
})
export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;