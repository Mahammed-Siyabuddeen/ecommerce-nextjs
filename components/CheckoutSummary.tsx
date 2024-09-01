import React from 'react'
import CartTotal from './CartTotal'
import CartItem from './cartItem'
import { cartType } from './Types/cartType'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/redux/store'

const CheckoutSummary = () => {
  const checkout = useSelector((state: RootState) => state.checkout)
  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className='text-3xl font-bold text-center my-14'>Summary</h1>
        <div className="flex flex-col md:flex-row mx-auto w-4/5 justify-between">
          <div className="flex flex-col md:m-3 md:mr-6  w-full md:w-4/5">

            <div className="hidden md:flex justify-between p-5">
              <p className='font-medium w-3/6 items-center text-center'>product Details</p>
              <p className='font-medium w-1/6 items-center text-center'>quantity </p>
              <p className='font-medium w-1/6 items-center text-center'>Price</p>
              <p className='font-medium w-1/6 items-center text-center'>total</p>
              <p className='w-1/6 items-center text-center'>close</p>
            </div>
            {
              checkout.checkout_products.map((items: cartType) => (

                <CartItem key={items._id} items={items} />
              ))
            }

          </div>

          <div className="w-full mb-10 md:w-1/5  ">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary