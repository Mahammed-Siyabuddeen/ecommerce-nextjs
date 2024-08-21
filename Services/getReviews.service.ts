import { fecthData } from "./fecthData";

export const getReviewApi=({product_id}:{product_id:string})=>fecthData.get(`/rating/reviews/${product_id}`)
