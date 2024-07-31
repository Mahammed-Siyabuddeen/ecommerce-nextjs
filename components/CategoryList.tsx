import React, { FC } from 'react'
import { BooksIcon } from './Icons/BooksIcon'
import { ElectronicsIcon } from './Icons/ElectronicsIcon'
import { FurnitureIcon } from './Icons/FurnitureIcon'
import { MensClothesIcon } from './Icons/MensclothIcons'
import { ShoesIcon } from './Icons/ShoesIcon'
import { SportsIcon } from './Icons/SportsIcon'
import { ToysIcon } from './Icons/Toys'
import { WomensClothesIcon } from './Icons/WomenclothIcon'

const CategoryList:FC = () => {
  return (
    <div className="container mx-auto py-3">
      <h1 className='text-2xl font-semibold'>Our Top Categories</h1>
      <div className=" flex text-2xl justify-evenly">
      <div className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24 justify-center">
        <BooksIcon/>
        <p className='text-sm'>Books</p>
      </div>
      <div className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24 justify-center cursor-pointer">
        <ElectronicsIcon/>
        <p className='text-sm'>Electronis</p>
      </div>
      <div className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <FurnitureIcon/>
        <p className='text-sm'>Furniture</p>
      </div>
      <div className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <MensClothesIcon/>
       <p className='text-sm'> Mens </p>
      </div>
      <div className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <ShoesIcon/>
        <p className='text-sm'>Shoes</p> 
      </div>
      <div className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <SportsIcon/>
        <p className='text-sm'>Sports</p>
      </div>
      <div className="flex flex-col gap-3 items-center  w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <ToysIcon/>
        <p className='text-sm'>Toys</p>
      </div>
      <div className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24  justify-center cursor-pointer">
        <WomensClothesIcon/>
       <p className='text-sm'>Womens</p> 
      </div>
    </div>
    </div>
  )
}

export default CategoryList