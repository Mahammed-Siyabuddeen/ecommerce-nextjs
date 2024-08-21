import { fecthData } from "./fecthData";

export const getRating=({product_id}:{product_id:string})=>fecthData.get(`/rating/totalrating/${product_id}`)
