import React from 'react'
import { addressType } from './Types/addressType'
import PdfRender from './PdfRender'
import ReactPDF, { PDFDownloadLink, PDFRenderer } from '@react-pdf/renderer'
import { orderDetailsType } from './Types/orderDetailType'

const OrderAddress = ({ address, data }: { address: addressType, data: orderDetailsType }) => {
console.log(data);

    const handleclick = () => {
        ReactPDF.render(<PdfRender data={data} />, './invoice')
    }
    return (
        <div className="flex bg-gray-100  rounded p-8 ">
            <div className="basis-3/5 flex flex-col gap-3">
                <h1 className="font-bold ">
                    Delivery Address
                </h1>
                <p className="font-medium">
                    {address.name}
                </p>
                <p>{address.street}, {address.city} {address.zipcode}, {address.state}</p>
                <div className="flex flex-col">
                    <p className="font-medium">Phone number</p>
                    <p>{address.phone}</p>
                </div>
            </div>
            <div className="basis-2/5 flex flex-col gap-3 font-medium">
                <h1 className='bold'>More actions</h1>
                <p className="px-2 py-2 border max-w-fit">
                    <PDFDownloadLink document={<PdfRender data={data} />} fileName="invoice.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Download Invoice'
                        }
                    </PDFDownloadLink>
                </p>
            </div>
        </div>
    )
}

export default OrderAddress