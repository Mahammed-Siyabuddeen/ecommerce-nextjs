import { fecthData } from "./fecthData";


export const getAllProducts=()=>fecthData.get('/product/admin/getallproductdetails')