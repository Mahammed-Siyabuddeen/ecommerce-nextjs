import { fecthData } from "./fecthData";


interface prop{
    name?:string,
    category?:string
}
export const getAllProductsapi=(query:prop)=>{

    const params=new URLSearchParams()
    if(query.name){
        params.append('name',query.name)
    }
    if(query.category){
        params.append('category',query.category)
    }
    console.log(params);
    
   return fecthData.get(`/product/getproducts?${params.toString()}`)
}
export const getProductDetails=(param:string)=>fecthData.get(`/product/getproduct/${param}`)