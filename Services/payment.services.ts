import { addressType } from "@/components/Types/addressType";
import { fecthData } from "./fecthData";

interface getClientSecretprop extends addressType{
    amount:number,
    user_id:string,
    cart_id:string
}

export const getClientSecret=(data:getClientSecretprop)=>fecthData.post('/payment/get-client-secret',{...data})