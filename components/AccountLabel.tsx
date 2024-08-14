'use client';
import { RootState } from '@/features/redux/store';
import React, { FC, useEffect, useState,  } from 'react'
import { useSelector } from 'react-redux';
import { AccountIcon } from './Icons/AccountIcon';
import Link from 'next/link';
import PopupAccount from './PopupAccount';
import { OrderIcon } from './Icons/OrderIcon';
const AccountLabel: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  
  useEffect(()=>{
    if(user && !user._id.length){
      console.log('user not found=========================');
      
    }
  },[user])

  if(user===null) return(<></>)
  if (!user.first_name.length) return (
    <Link href={'/login'} className="basis-2/4 justify-center gap-1  flex items-center"><span className='text-xl'><AccountIcon /></span>Account</Link>
  )
  return (
    <>
     <PopupAccount />
     <Link href={'/orders'} className="basis-2/4 justify-center gap-1  flex items-center"><span className='text-xl'><OrderIcon/></span>Orders</Link>

    </>
  )
}

export default AccountLabel