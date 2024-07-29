import React, { FC } from 'react'
import { DeliveryIcon } from './Icons/DeliveryIcon'
import { ReturnIcon } from './Icons/ReturnIcon'
import { SecurePaymentIcon } from './Icons/SecurePayemtIcon'
import { SupportIcon } from './Icons/SupportIcon'

const Services: FC = () => {
    return (
        <div className="container mx-auto flex justify-evenly py-3 ">
            <div className="basis-1/4 service_div flex  gap-5 items-center ">
                <div>
                    <DeliveryIcon className='text-2xl'/>
                </div>
                <div>
                    <h2>Free Delivery</h2>
                    <p>for all order above &#8377; 500</p>
                </div>
            </div>
            <div className="basis-1/4 service_div flex  gap-5 items-center">
                <div>
                    <ReturnIcon className='text-3xl'/>
                </div>
                <div>
                    <h2>7 Days Return</h2>
                    <p>goods have a problems</p>
                </div>
            </div>
            <div className="basis-1/4 service_div flex gap-5 items-center ">
                <div>
                    <SecurePaymentIcon className='text-3xl'/>
                </div>
                <div>
                    <h2>Secure Payment</h2>
                    <p>100% secure payment</p>
                </div>
            </div>
            <div className="basis-1/4 service_div flex  gap-5 items-center">
                <div>
                    <SupportIcon className='text-3xl'/>
                </div>
                <div>
                    <h2>24/7 SUPPORT</h2>
                    <p>dedicated support</p>
                </div>
            </div>
        </div>
    )
}

export default Services