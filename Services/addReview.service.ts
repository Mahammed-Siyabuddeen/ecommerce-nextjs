import { fecthData } from "./fecthData";

interface prop{
    user_id:string,
    orderItem_id:string,
    rating:number,
    comment?:string
}
export const AddReviewApi=(data:prop)=>fecthData.post("rating/addproductreview",{...data})
