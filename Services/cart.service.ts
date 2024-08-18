import { fecthData } from "./fecthData";

interface prop{
    user_id:string,
    product_id:string,
    size?:string
}
interface changequantityprop{
    cartItem_id:string,
    quantity:number
}
export const addtocart=(items:prop)=>fecthData.post('/cart/additem',{...items})
export const removeFromCart=(cartItemId:string)=>fecthData.delete(`/cart/removeitem/${cartItemId}`)
export const getcartItems=(data:{user_id:string})=>fecthData.post('/cart/getitems',{...data})
export const changeCartItemsQuantity=(data:changequantityprop)=>fecthData.post('/cart/changequantity',{...data})
