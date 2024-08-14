import { fecthData } from "./fecthData";



export const getOrderDetails=(data:{user_id:string})=>fecthData.post('/order',{...data})