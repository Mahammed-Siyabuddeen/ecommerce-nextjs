import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface user{
    _id:string,
    first_name:string,
    email:string,
    token:string,
    last_name?:string,
    phone_number?:string[],
}
const initialState=():user=>{
    if(typeof window !=='undefined'){
       const storedState= window.localStorage.getItem('profile')
       if(storedState)
        return JSON.parse(storedState)
    }
    return {_id:'',first_name:'',email:'',token:''}
}
 const authSlice=createSlice(
    {
        name:'auth',
        initialState,
        reducers:{
            setUser:(state,action:PayloadAction<user>)=>{
                localStorage.setItem('profile',JSON.stringify(action.payload));
                
                    return action.payload;                
            },
            clearUser:(state,action)=>{
                localStorage.removeItem('profile')
                // return state
            }
        }
    }
)

export const {setUser}=authSlice.actions;
export default authSlice.reducer