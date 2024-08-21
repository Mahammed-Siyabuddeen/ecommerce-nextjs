import { fecthData } from "./fecthData";

interface prop{
    email:string,
    password:string
}
export const adminLoginApi=(data:prop)=>fecthData.post('/auth/admin/login',{...data})
