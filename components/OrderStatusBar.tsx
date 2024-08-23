import React from 'react'

const OrderStatusBar = ({ status }: { status: string }) => {

    if (status == 'canceled')
        return (
            <>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-3 items-start">
                        <div className="rounded-full w-3 h-3 bg-red-700 "></div>
                        <p className='text-red-700 text-sm'>Order Confirmed</p>
                    </div>
                    <div className="flex flex-col gap-3 items-end">
                        <div className="rounded-full w-3 h-3 bg-red-700 "></div>
                        <p className='text-red-700 text-sm'>canceled</p>
                    </div>
                    <div className={` h-1 absolute top-1  z-20 bg-red-700 w-full`}></div>
                </div>
            </>
        )

    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col gap-3 items-start">
                    <div className="rounded-full w-3 h-3 bg-green-700 "></div>
                    <p className='text-green-700 text-sm'>Order Confirmed</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <div className={`rounded-full w-3 h-3 ${status == 'ordered' ? 'bg-gray-700 ' : 'bg-green-700'}`}></div>
                    <p className='text-gray-700 text-sm'>shipped</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <div className={`rounded-full w-3 h-3 ${status == 'ordered' ? 'bg-gray-700 ' : status == 'shipped' ? 'bg-gray-700' : 'bg-green-700'}`}></div>
                    <p className='text-gray-700 text-sm'>out of delivery</p>
                </div>
                <div className="flex flex-col gap-3 items-end">
                    <div className={`rounded-full w-3 h-3 ${status == 'delivered' ? 'bg-green-700' : 'bg-gray-700 '}`}></div>
                    <p className='text-gray-700 text-sm'>delivered</p>
                </div>
            </div>
            <div className="w-full h-1 absolute top-1  bg-gray-700"></div>
            <div className={` h-1 absolute top-1  z-20 bg-green-700 ${status === 'delivered' ? 'w-full' : status === "out of delivery" ? 'w-3/4' : status === 'shipped' ? 'w-2/4' : 'w-1/4'}`}></div>
        </>
    )
}

export default OrderStatusBar