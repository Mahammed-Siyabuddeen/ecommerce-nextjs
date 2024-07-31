import React from 'react'

const OrderFilters = () => {
    return (
        <>
            <h1 className='text-2xl font-medium p-4'>Filters</h1>
            <div className="px-4 border-y">
                <h2 className="font-medium p-2 uppercase ">order status</h2>
                <div className="flex-flex-col ">
                    <div className="flex gap-2 my-2 ">
                        <input type="checkbox" />
                        <p>On the way</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        <input type="checkbox" />
                        <p>Delivered</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        <input type="checkbox" />
                        <p>Cancelled</p>
                    </div>
                    <div className="flex gap-2  my-2">
                        <input type="checkbox" />
                        <p>Returned</p>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <h2 className="font-medium p-2 uppercase ">order status</h2>
                <div className="flex-flex-col ">
                    <div className="flex gap-2 my-2 ">
                        <input type="checkbox" />
                        <p>On the way</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        <input type="checkbox" />
                        <p>Delivered</p>
                    </div>
                    <div className="flex gap-2 my-2">
                        <input type="checkbox" />
                        <p>Cancelled</p>
                    </div>
                    <div className="flex gap-2  my-2">
                        <input type="checkbox" />
                        <p>Returned</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderFilters