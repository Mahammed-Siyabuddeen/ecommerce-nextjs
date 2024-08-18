import { fecthData } from "./fecthData";


export const getWishListItems=(data:{user_id:string})=>fecthData.post('/wishlist/getitems',{...data})