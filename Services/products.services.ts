import { fecthData } from "./fecthData";


interface prop {
    name?: string,
    category?: string,
    price?: string,
    size?: string,
    rating?: string,
    brand?: string,
}
export const getAllProductsapi = (query: prop) => {

    const params = new URLSearchParams()
    if (query.name) 
        params.append('name', query.name)
    if (query.category) 
        params.append('category', query.category)
    if(query.brand)
        params.append('brand', query.brand)
    if(query.price)
        params.append('price', query.price)
    if(query.rating)
        params.append('rating', query.rating)
    if(query.size)
        params.append('size', query.size)
    console.log(params);

    return fecthData.get(`/product/getproducts?${params.toString()}`)
}
export const getProductDetails = (param: string) => fecthData.get(`/product/getproduct/${param}`)