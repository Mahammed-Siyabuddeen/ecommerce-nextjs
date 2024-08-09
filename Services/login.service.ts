import { fecthData } from "./fecthData";



interface prop{
    email:string,
    password:string
}

export const LoginApi=(data:prop)=>fecthData.post('/login',{...data})