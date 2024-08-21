'use client'
import { RootState } from '@/features/redux/store'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { getWishListItems } from '@/Services/getWishListItems.services'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DelteIcon } from './Icons/DeleteIcon'
import WishListItem from './WishListItem'
import { wishListType } from './Types/wishListType'

const WishList = () => {
    const user = useSelector((state: RootState) => state.user);
    const [WishListItems, setWishListItems] = useState<wishListType[]>([])
    useEffect(() => {
        if (!user._id) return;
        getWishListItems({ user_id: user._id }).then(({ data }) => {
            console.log(data);
            setWishListItems(data)
        }).catch((error) => ApiErrorResponse(error))
    }, [user])
    return (
        <div className="container mx-auto px-8">
            <div className="flex items-center py-6"><h1 className="font-bold text-2xl">WishList</h1></div>
            <div className=" gap-4 p-2">
                {
                    WishListItems.map((item: wishListType) => (
                        <WishListItem key={item._id} item={item} setWishListItems={setWishListItems} />
                    ))
                }
            </div>
        </div>
    )
}

export default WishList