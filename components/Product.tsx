'use client'
import Image from 'next/image'
import React, { FC } from 'react'
import { SemiStarIcon } from './Icons/StarIcon'
import { productType } from './Types/productType'
import Link from 'next/link'
import { FavIcon } from './Icons/FavIcon'
import { removeWishListItem } from '@/Services/removeWishListItem'
import { addItemToWishList } from '@/Services/addItemToWishList'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/redux/store'
import { toast } from 'sonner'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { usePathname } from 'next/navigation'


const Product = ({productinfo }: { productinfo: productType }) => {
  const user=useSelector((state:RootState)=>state.user)
  const pathname=usePathname()
  console.log(productinfo);
  
  if (!productinfo) return <>proudct not found</>

  const handleAddtoWishList=()=>{
    if(!user._id) return toast.error('please login')
    addItemToWishList({user_id:user._id,product_id:productinfo._id}).then(()=>{
      toast.success('successfully added ')
  }).catch(error=>ApiErrorResponse(error))
  }
  return (
    <div  className="p-3 rounded-sm">
      <div className={`h-64  relative ${pathname == "/search" ? 'bg-white' : 'bg-slate-200'}`}>
        <Image fill className=' ' src={productinfo.imagesUrl[0]} alt="" />
        <FavIcon onClick={handleAddtoWishList} className='absolute cursor-pointer z-50 text-2xl right-2 top-2'/>
      </div>
      <Link href={`/productdetails/${productinfo._id}`} className='flex flex-col gap-1'>
        <h3 className='font-semibold pt-2'>{productinfo.name}</h3>
        <p className='text-sm text-slate-800 font-semibold'>{productinfo.brand}</p>
        <div className="flex  items-center gap-2">
          <div className={`flex gap-1 items-center pr-3 border-r-2 ${productinfo.ratings.average===0?'hidden':'block'}`}><span className={`text-yellow-600 text-xl `}><SemiStarIcon /></span> {productinfo.ratings?.average}</div>
          <div className='' >4500 sold</div>
        </div>
        <div className="flex gap-3">
          <p className='line-through text-slate-950 opacity-80'>&#8377;{productinfo.mrp}</p>
          <p>&#8377; {productinfo.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product