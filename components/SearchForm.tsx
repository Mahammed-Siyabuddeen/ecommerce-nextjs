'use client';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Arrowdown } from './Icons/Arrowdown'
import { SearchIcon } from './Icons/SearchIcon'
import { useRouter } from 'next/navigation';
import { PopoverButton, Popover, PopoverPanel } from '@headlessui/react';
import { getAllCategory } from '@/Services/category.service';
import { categoryType } from './Types/categoryType';
import Link from 'next/link';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [category, setCategory] = useState<categoryType[]>([])
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!searchQuery.length) return;
        router.push(`/search?name=${searchQuery}`)
    }
    useEffect(() => {
        getAllCategory().then(({ data }) => {
            setCategory(data)
        }).catch((err) => console.log(err))
    }, [])
//    console.log(isOpen);
   

    return (
        <form onSubmit={handleSubmit} className="flex w-4/5 border rounded-md overflow-hidden ">
            <input value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                type="text" className="w-7/12 border-r outline-none" />

            <div className="w-3/12 p-2 flex justify-between items-center">
                <Popover  onClick={() => setIsOpen(!isOpen)} className="">
                    <PopoverButton className='outline-none flex items-center gap-4'>Category <Arrowdown /> </PopoverButton>
                    <PopoverPanel anchor="bottom" className="flex flex-col gap-2 mt-3 py-4 pr-8 px-2  z-50 bg-white rounded shadow-lg shadow-orange-100 ">
                        {
                            category.map((category:categoryType) => (
                                <Link  key={category._id} href={`/search?category=${category._id}`}>{category.name}</Link>
                            ))
                        }
                    </PopoverPanel>
                </Popover>
            </div>
            <button type='submit' className="w-2/12  p-2 bg-black text-white text-2xl flex  justify-center  "><SearchIcon /></button>
        </form>
    )
}

export default SearchForm