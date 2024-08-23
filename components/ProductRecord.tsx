import React, { FC } from 'react'
import { allProductsType } from './Types/allProductsType'
interface prop {
    productDetails:allProductsType
}
const ProductRecord: FC<prop> = ({ productDetails }) => {
    return (
        <>
            <tr className="hover:bg-slate-200 border-b">
                <td className="px-6 py-3" >{productDetails.name}</td>
                <td className="px-6 py-3" >{productDetails._id}</td>
                <td className="px-6 py-3" >{productDetails.price}</td>
                <td className="px-6 py-3" >{productDetails.stock_quantity}</td>
                <td className="px-6 py-3" >{productDetails.totalSale}</td>
            </tr>
        </>
    )
}

export default ProductRecord