import Link from 'next/link'
import React from 'react'
import { BooksIcon } from './Icons/BooksIcon'
import { getCategoryID } from '@/Services/category.service'
import { AxiosResponse } from 'axios'
import { WomensClothesIcon } from './Icons/WomenclothIcon'
import { ToysIcon } from './Icons/Toys'
import { SportsIcon } from './Icons/SportsIcon'
import { ShoesIcon } from './Icons/ShoesIcon'
import { MensClothesIcon } from './Icons/MensclothIcons'
import { FurnitureIcon } from './Icons/FurnitureIcon'
import { ElectronicsIcon } from './Icons/ElectronicsIcon'

interface prop {
    name: string,
    _id: string
}
const Category = async ({ name }: { name: string }) => {
    const { data }: AxiosResponse<prop> = await getCategoryID(name)
    return (
        <Link href={`/search?category=${data._id}`} className="flex flex-col gap-3 items-center w-24 bg-slate-200 rounded-full h-24 justify-center">
            {
                name=="books"?<BooksIcon />
                :name=="electronics"?<ElectronicsIcon/>
                :name=="furniture"? <FurnitureIcon/>
                :name=="mens"? <MensClothesIcon/>
                :name=="shoes"? <ShoesIcon/>
                :name=="sports"?<SportsIcon/>
                :name=="toys"? <ToysIcon/>
                :<WomensClothesIcon/>
            }
            <p className='text-sm'>{name}</p>
        </Link>
    )
}

export default Category