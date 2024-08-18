import { fecthData } from "./fecthData";

interface prop{
    user_id:string,
    product_id:string,
}

export const addItemToWishList=(data:prop)=>fecthData.post('/wishlist/additem',{...data})