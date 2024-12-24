'use client'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcartItems } from '@/Services/cart.service'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { AppDispatch, RootState } from '@/features/redux/store'
import { setCartItems } from '@/features/cartSlice'
import { cartType } from '@/components/Types/cartType'
import EmptyCart from '@/components/EmptyCart'
import Loading from '@/components/Loading'
import CartItem from '@/components/cartItem'
import CartTotal from '@/components/CartTotal'

const Page: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const { cartitems } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {

    if (!user._id) return;

    getcartItems({ user_id: user._id })
      .then(({ data }: { data: cartType[] }) => {
        dispatch(setCartItems(data));
      })
      .catch((error) =>
        ApiErrorResponse(error)
      )
      .finally(() =>
        setLoading(false)
      );
  }, [dispatch, user])

  if (loading) return <Loading />

  if (!cartitems.length) return <EmptyCart />

  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className='text-3xl font-bold text-center my-14'>Cart</h1>
        <div className="md:flex mx-auto w-4/5 justify-between">
          <div className=" flex flex-col md:m-3 md:mr-6   md:w-4/5">

            <div className="hidden md:flex justify-between p-5">
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
          <div className="w-full mb-10 md:w-1/5  ">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page