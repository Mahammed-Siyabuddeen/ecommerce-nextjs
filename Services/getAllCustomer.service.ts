import { fecthData } from "./fecthData";


export const getAllCustomers=()=>fecthData.get('/auth/customers')