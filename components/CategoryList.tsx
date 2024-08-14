import React, { FC } from 'react'
import { BooksIcon } from './Icons/BooksIcon'
import { ElectronicsIcon } from './Icons/ElectronicsIcon'
import { FurnitureIcon } from './Icons/FurnitureIcon'
import { MensClothesIcon } from './Icons/MensclothIcons'
import { ShoesIcon } from './Icons/ShoesIcon'
import { SportsIcon } from './Icons/SportsIcon'
import { ToysIcon } from './Icons/Toys'
import { WomensClothesIcon } from './Icons/WomenclothIcon'
import Link from 'next/link'

const CategoryList:FC = () => {
  return (
    <div className="container mx-auto py-3">
      <h1 className='text-2xl font-semibold'>Our Top Categories</h1>
      <div className=" flex text-2xl justify-evenly">
      <Link href={'/books'} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24 justify-center">
        <BooksIcon/>
        <p className='text-sm'>Books</p>
      </Link>
      <Link href={'electronics'} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24 justify-center cursor-pointer">
        <ElectronicsIcon/>
        <p className='text-sm'>Electronics</p>
      </Link>
      <Link href={'/furniture'} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <FurnitureIcon/>
        <p className='text-sm'>Furniture</p>
      </Link>
      <Link href={'/mens'} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <MensClothesIcon/>
       <p className='text-sm'> Mens </p>
      </Link>
      <Link href={'/shoes'} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <ShoesIcon/>
        <p className='text-sm'>Shoes</p> 
      </Link>
      <Link href={'/sports'} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <SportsIcon/>
        <p className='text-sm'>Sports</p>
      </Link>
      <Link href={'/toys'} className="flex flex-col gap-3 items-center  w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <ToysIcon/>
        <p className='text-sm'>Toys</p>
      </Link>
      <Link href={'/womens'} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <WomensClothesIcon/>
       <p className='text-sm'>Womens</p> 
      </Link>
    </div>
    </div>
  )
}

export default CategoryList