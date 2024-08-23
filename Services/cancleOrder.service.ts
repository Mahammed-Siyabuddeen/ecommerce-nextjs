import { fecthData } from "./fecthData";

interface prop{
    order_id:string,
}
export const cancelOrder=(data:prop)=>fecthData.post('/order/cancelorder',{...data})


