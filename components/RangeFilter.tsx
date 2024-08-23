import React, { ChangeEvent, FC } from 'react'
import { PriceRangeType } from './Types/priceRange'

interface prop{
    priceRange: PriceRangeType | undefined,
    price: string | undefined,
   setPrice: React.Dispatch<React.SetStateAction<string | undefined>>
}
const RangeFilter:FC<prop> = ({priceRange,price,setPrice}) => {
  return (
    <div className="w-full p-4  text-sm flex flex-col  gap-3 border">
    <div className="flex justify-between">
        <p>Price</p>
    </div>
    <div className="flex justify-between">
        <p>&#8377;{priceRange?.min}</p>
        <p>&#8377;{priceRange?.max}</p>
    </div>
    <input value={price||0} onChange={(e:ChangeEvent<HTMLInputElement>)=>setPrice(e.target.value)} min={priceRange?.min || 0} max={priceRange?.max || 5000} type="range" className='w-full' />
</div>
  )
}

export default RangeFilter