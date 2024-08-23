import { userType } from "@/components/Types/userType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";


const initialState = (): userType => {
    if (typeof window !== 'undefined') {
        const storedState = window.localStorage.getItem('profile')
        if (storedState) {
            const user: userType = JSON.parse(storedState)
            console.log(user.token);
            const token = jwtDecode(user.token);
            if ((token.exp as number) * 1000 < new Date().getTime()) {
                localStorage.removeItem('profile');
            } else {
                return user;
            }

        }
    }
    return { _id: '', first_name: '', email: '', token: '' }
}
const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            setUser: (state, action: PayloadAction<userType>) => {
                localStorage.setItem('profile', JSON.stringify(action.payload));

                return action.payload;
            },
            clearUser: (state) => {
                console.log('clering user');

                localStorage.removeItem('profile')
                // return state
            }
        }
    }
)

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer