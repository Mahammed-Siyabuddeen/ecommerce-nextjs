import { fecthData } from "./fecthData";


interface categoryprop{
    name:string
}

export const getAllCategory=()=>fecthData.get('/product/getcategory')
export const getAllCategorywithProductCount=()=>fecthData.get('/product/getcategorywithcount');
export const addCategory=(data:categoryprop)=>fecthData.post('/product/addcategory',{...data})