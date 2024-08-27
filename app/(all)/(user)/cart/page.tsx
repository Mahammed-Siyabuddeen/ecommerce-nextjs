'use client'
import React, { FC, useEffect } from 'react'
import CartItem from '../../../../components/cartItem'
import CartTotal from '../../../../components/CartTotal'
import Header from '../../../../components/Header'
import { getcartItems } from '@/Services/cart.service'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/features/redux/store'
import { cartType } from '@/components/Types/cartType'
import { setCartItems } from '@/features/cartSlice'
const Page: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const {cartitems} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user._id) return;
    getcartItems({ user_id: user._id }).then(({ data }: { data: cartType[] }) => {
      dispatch(setCartItems(data));
    }).catch((error) => ApiErrorResponse(error))
  }, [dispatch, user])
  if (!cartitems.length) return (
    <div className="flex items-center justify-center h-96">
      <p className="text-center text-2xl font-bold text-slate-500">Empty Cart</p>
    </div>
  )
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
            {
              cartitems.map((items: cartType) => (

                <CartItem key={items._id} items={items} />
              ))
            }
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