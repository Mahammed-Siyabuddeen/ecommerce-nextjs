import { fecthData } from "./fecthData";

interface prop{
    user_id:string,
    product_id:string
}
interface changequantityprop{
    cartItem_id:string,
    quantity:number
}
export const addtocart=(items:prop)=>fecthData.post('/cart/additem',{...items})
export const getcartItems=(data:{user_id:string})=>fecthData.post('/cart/getitems',{...data})
export const changeCartItemsQuantity=(data:changequantityprop)=>fecthData.post('/cart/changequantity',{...data})
