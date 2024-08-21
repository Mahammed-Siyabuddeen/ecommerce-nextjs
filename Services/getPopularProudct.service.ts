import { fecthData } from "./fecthData";


export const getPopularProducts=()=>fecthData.get('/product/popular-product');

