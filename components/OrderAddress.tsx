import React from 'react'

const OrderAddress = () => {
    return (
        <div className="flex bg-gray-100  rounded p-8 ">
            <div className="basis-3/5 flex flex-col gap-3">
                <h1 className="font-bold ">
                    Delivery Address
                </h1>
                <p className="font-medium">
                    shihab
                </p>
                <p>kudmar junction savanoor, Puttur 574202, Karnataka</p>
                <div className="flex flex-col">
                    <p className="font-medium">Phone number</p>
                    <p>8980890890</p>
                </div>
            </div>
            <div className="basis-2/5 flex flex-col gap-3 font-medium">
                <h1 className='bold'>More actions</h1>
                <p className="px-2 py-2 border max-w-fit">Download</p>
            </div>
        </div>
    )
}

export default OrderAddress