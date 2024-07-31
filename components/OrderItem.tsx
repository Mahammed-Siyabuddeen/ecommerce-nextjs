import React, { FC } from 'react'

interface prop{
    Order:string,
    Customer:string,
    Type:string,
    Status:string,
    Product:string,
    Total:number,
    Date:string,

}
const OrderItem:FC<prop> = ({Order,Customer,Type,Status,Product,Total,Date}) => {
  return (
    <tr className="hover:bg-slate-400 text-xs">
    <td className="px-6 py-3" >{Order}</td>
    <td className="px-6 py-3" >{Customer}</td>
    <td className="px-6 py-3" >{Type}</td>
    <td className="px-6 py-3" >{Status}</td>
    <td className="px-6 py-3" >{Product}</td>
    <td className="px-6 py-3" >{Total}</td>
    <td className="px-6 py-3" >{Date}</td>
</tr>
  )
}

export default OrderItem