import { fecthData } from "./fecthData";



export const getAllProductsapi=()=>fecthData.get('/product/getproducts')
export const getProductDetails=(param:string)=>fecthData.get(`/product/getproduct/${param}`)