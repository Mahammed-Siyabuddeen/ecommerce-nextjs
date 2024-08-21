import { fecthData } from "./fecthData";


interface prop{
    password:string,
    token:string,
}
export const resetPaaswordApi=(data:prop)=>fecthData.post(`/auth/reset-password/${data.token}`,{password:data.password})
