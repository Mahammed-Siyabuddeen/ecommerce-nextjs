'use client';
import React, { useEffect } from 'react'
import { Arrowdown } from './Icons/Arrowdown'
import { SearchIcon } from './Icons/SearchIcon'
import { AccountIcon } from './Icons/AccountIcon'
import { CartIcon } from './Icons/CartIcon'
import { FavIcon } from './Icons/FavIcon'
import Link from 'next/link'
import AccountLabel from './AccountLabel'
import SearchForm from './SearchForm'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/redux/store';
import { getCartCount } from '@/Services/category.service';
import { setCartCount } from '@/features/cartSlice';
const Header = () => {
    const Dispatch=useDispatch<AppDispatch>()
    const user=useSelector((state:RootState)=>state.user)
    const {Count} = useSelector((state: RootState) => state.cart)
    useEffect(()=>{
        if(!user || !user._id)return;
        getCartCount({user_id:user._id}).then(({data})=>{
            console.log(data);
            Dispatch(setCartCount(data))
        }
        ).catch((error)=>{console.log(error);
        })
    },[user])
    return (
        <div className="container mx-auto flex items-center w-screen p-4">
            <Link href={'/'} className="basis-1/4">
                <h1 className="text-3xl font-bold">PAI<span className='text-yellow-400'>RCA</span>RE</h1>
            </Link>
            <div className="basis-2/4 ">
                <SearchForm />
            </div>
            <div className="basis-1/4 flex w-full items-center justify-center">
                <AccountLabel />
                <Link href={'/wishlist'} className="basis-1/4  text-2xl " title='wishlist'><FavIcon /></Link>
                <Link href={'/cart'} className="basis-1/4  text-2xl " title='cart'>
                    <div className="w-fit relative"><CartIcon />
                    {
                        Count==0?<></>:
                        <span className='animate-bounce text-xs absolute -right-3 -top-4 py-1  px-2 rounded-full bg-yellow-400'>{Count}</span>
                    }
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header