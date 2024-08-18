import Image from 'next/image'
import React, { FC } from 'react'
import { MultiplyIcon } from './Icons/MultiplyIcon'
import { cartType } from './Types/cartType'
import { changeCartItemsQuantity, removeFromCart } from '@/Services/cart.service'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/features/redux/store'
import { removeitem, setQuantity } from '@/features/cartSlice'
import { toast } from 'sonner'
import { usePathname, useRouter } from 'next/navigation'

const CartItem = ({ items }: { items: cartType }) => {
    const dispatch = useDispatch<AppDispatch>()
    const pathname = usePathname()
    const router = useRouter()


    const handlequantitychange = (value: number) => {
        if (pathname !== '/cart') router.push('/cart')
        dispatch(setQuantity([value, items.cartItem_id]))
        changeCartItemsQuantity({ quantity: value, cartItem_id: items.cartItem_id })
        .then(({ data }) => {
            console.log(data);
        }).catch((error) => ApiErrorResponse(error));

    }
    const handleRemoveFromCart = (cartItemId: string) => {
        if (pathname !== '/cart') router.push('/cart')
        if (!window.confirm(`are you sure want to delete ${items.name}`)) return;
        removeFromCart(cartItemId).then(({ data }) => {
            toast('successfully removed');
            dispatch(removeitem(cartItemId))
        }).catch((error) => ApiErrorResponse(error))
    }
    return (
        <div className="flex items-center border rounded-md  p-5 my-3">
            <div className="w-3/6 grow flex ">
                <div className="relative w-2/4 h-20 ">
                    <Image src={items.imagesUrl[0]} fill alt='' />
                </div>
                <div className="flex flex-col item-center gap-1">
                    <h2>{items.name}</h2>
                    <p>{items.brand}</p>
                </div>
            </div>

            <div className="flex gap-1 items-center w-1/6 justify-center">
                <div onClick={() => handlequantitychange(-1)} className="text-2xl font-bold cursor-pointer px-2">-</div>
                <div className="text-sm font-medium p-2 px-4  border ">{items.quantity}</div>
                <div onClick={() => handlequantitychange(1)} className="text-2xl font-bold cursor-pointer px-2">+</div>
            </div>
            <div className="w-1/6 text-center">{items.price}</div>
            <div className="w-1/6 text-center">{items.total}</div>
            <div onClick={() => handleRemoveFromCart(items.cartItem_id)} className="w-1/6 flex justify-center cursor-pointer text-xl font-bold text-red-500"><MultiplyIcon /></div>
        </div>
    )
}

export default CartItem