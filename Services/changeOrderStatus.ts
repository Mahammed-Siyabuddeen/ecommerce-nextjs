import { fecthData } from "./fecthData";


interface prop{
    order_id:string,
    status:string
}
export const changeOrderStatus=(data:prop)=>fecthData.post('/order/admin/changeorderstatus',{...data})


