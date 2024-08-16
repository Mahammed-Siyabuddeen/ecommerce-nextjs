import { fecthData } from "./fecthData";


interface prop {
    order_id: string,
    orderitem_id: string,
}
export const orderDetailById = (data: prop) => fecthData.get(`/order/${data.order_id}/${data.orderitem_id}`)