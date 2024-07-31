import React, { FC } from 'react'
import CartItem from '../../../components/cartItem'
import CartTotal from '../../../components/CartTotal'
import Header from '../../../components/Header'
const Page: FC = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className='text-3xl font-bold text-center my-14'>Cart</h1>
        <div className="flex mx-auto w-4/5 justify-between">
          <div className=" flex flex-col m-3 mr-6   w-4/5">

            <div className="flex justify-between p-5">
              <p className='font-medium w-3/6 items-center text-center'>product Details</p>
              <p className='font-medium w-1/6 items-center text-center'>quantity </p>
              <p className='font-medium w-1/6 items-center text-center'>Price</p>
              <p className='font-medium w-1/6 items-center text-center'>total</p>
              <p className='w-1/6 items-center text-center'>close</p>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />

          </div>

          <div className="w-1/5  ">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page