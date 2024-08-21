import { fecthData } from "./fecthData";


export const forgetPasswordApi=(data:{email:string})=>fecthData.post('/auth/forget-password',{...data})