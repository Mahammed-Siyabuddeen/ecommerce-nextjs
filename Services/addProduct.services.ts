import {fecthFormData } from "./fecthData";


export const addProduct=(form:FormData)=>fecthFormData.post('/product/addproduct',form)