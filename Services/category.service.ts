import { fecthData } from "./fecthData";


interface categoryprop{
    name:string
}

export const getAllCategory=()=>fecthData.get('/product/getcategory')
export const getAllCategorywithProductCount=()=>fecthData.get('/product/getcategorywithcount');
export const addCategory=(data:categoryprop)=>fecthData.post('/product/addcategory',{...data})
export const getCategoryID=(name:string)=>fecthData.get(`/product/category-id?name=${name}`)
export const getCartCount=({user_id}:{user_id:string})=>fecthData.post('/cart/cartcount',{user_id})