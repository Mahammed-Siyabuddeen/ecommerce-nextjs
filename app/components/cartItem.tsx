import Image from 'next/image'
import React, { FC } from 'react'
import { MultiplyIcon } from './Icons/MultiplyIcon'

const CartItem: FC = () => {
    return (
        <div className="flex items-center border rounded-md  p-5 my-3">
            <div className="w-3/6 grow flex ">
                <div className="relative w-2/4 h-20 ">
                <Image src={'/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png'} fill alt='' />
                </div>
                <div className="flex flex-col item-center gap-1">
                <h2>proudct name</h2>
                <p>prodct category</p>
                </div>
            </div>

            <div className="flex gap-1 items-center w-1/6 justify-center">
                <div className="text-xl font-bold">-</div>
                <div className="text-sm font-medium p-2  border ">Off</div>
                <div className="text-xl font-bold">+</div>
            </div>
            <div className="w-1/6 text-center">499</div>
            <div className="w-1/6 text-center">999</div>
            <div className="w-1/6 flex justify-center"><MultiplyIcon /></div>
        </div>
    )
}

export default CartItem