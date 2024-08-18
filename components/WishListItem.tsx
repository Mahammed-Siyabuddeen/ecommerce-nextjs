import React, { FC } from 'react'
import { DelteIcon } from './Icons/DeleteIcon'
import Image from 'next/image'
import { wishListType } from './Types/wishListType'
import { removeWishListItem } from '@/Services/removeWishListItem'
import { toast } from 'sonner'
import ApiErrorResponse from '@/Services/ApiErrorResponse'

interface prop{
    item:wishListType,
    setWishListItems:React.Dispatch<React.SetStateAction<wishListType[]>>
}
const WishListItem:FC<prop> = ({item,setWishListItems}) => {
    const handleRemoveItem=()=>{
        if(!window.confirm('are sure want to remove')) return;
        removeWishListItem(item._id).then(()=>{
            toast('Item remove successfully');
            setWishListItems((prevItem:wishListType[])=>prevItem.filter((data)=>data._id!==item._id))
        }).catch((error)=>ApiErrorResponse(error))
    }
    return (
        <div className="shadow-md w-3/4 mx-auto rounded-lg p-4 flex items-center  justify-between ">
            <div className="basis-2/7 relative">
                <Image width={100} height={100} src={`${item.product.imagesUrl[0]}`} alt='dd' />
            </div>
            <div className="basis-4/7 grow flex flex-col px-4 justify-between">
                <div>
                    <h1 className="font-bold text-lg ">
                        {item.product.name}
                    </h1>
                </div>
                <h1 className="font-bold text-xl">{item.product.price}</h1>
            </div>
            <div className="basis-1/7 ">
                <div className="text-2xl px-4 cursor-pointer text-red-500">
                    <DelteIcon onClick={handleRemoveItem}  />
                </div>
            </div>
        </div>
    )
}

export default WishListItem