import { fecthData } from "./fecthData";

interface prop {
    product_id: string,
    category_id: string
  }
export const getRelatedProducts=({category_id,product_id}:prop)=>fecthData.get(`/product/related-product?product_id=${product_id}&category_id=${category_id}`)