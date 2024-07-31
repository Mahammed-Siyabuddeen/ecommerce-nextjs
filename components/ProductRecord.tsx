import React, { FC } from 'react'
interface prop {
    Product: [string, string],
    ProdcutId: string
    Price: number
    Quantity: number
    Sale: number
}
const ProductRecord: FC<prop> = ({ ProdcutId, Product, Price, Quantity, Sale }) => {
    return (
        <tr className="hover:bg-slate-400 text-xs">
            <td className="px-6 py-3" >{Product[0]}</td>
            <td className="px-6 py-3" >{ProdcutId}</td>
            <td className="px-6 py-3" >{Price}</td>
            <td className="px-6 py-3" >{Quantity}</td>
            <td className="px-6 py-3" >{Sale}</td>
        </tr>
    )
}

export default ProductRecord