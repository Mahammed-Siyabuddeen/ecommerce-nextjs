'use client'
import React, { FC, useState } from 'react'
import { Arrowdown } from './Icons/Arrowdown'

interface prop{
    brand:string|undefined,
    setBrand: React.Dispatch<React.SetStateAction<string | undefined>>
}
const BrandFilter:FC<prop> = ({brand,setBrand}) => {
    const [open, setOpen] = useState(false);
    console.log(open);
    
    return (
        <div className="w-full p-4 text-sm  border">
            <div onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className='flex justify-between'>
                <p>BRAND</p>
                <Arrowdown />
            </div>
            <div className={`flex w-full duration-100 ease-in-out ${open?'block':'hidden'}`}>
                 <input value={brand} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setBrand(e.target.value)} type="text" className="w-full border p-2" />

            </div>

        </div>
    )
}

export default BrandFilter