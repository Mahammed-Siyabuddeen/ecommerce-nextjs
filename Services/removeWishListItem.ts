import { fecthData } from "./fecthData";

export const removeWishListItem=(itemId:string)=>fecthData.delete(`/wishlist/removeitem/${itemId}`)