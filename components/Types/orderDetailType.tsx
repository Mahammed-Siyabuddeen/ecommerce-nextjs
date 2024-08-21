import { addressType } from "./addressType";

export interface orderDetailsType{
    _id:string,
    address_id:string,
    status:string,
    totalPrice:number,
    quantity:number,
    product_id:string,
    productName:string,
    productImage:string[],
    orderItemId:string,
    address:addressType,
    create_at:string
    
}