import Link from 'next/link'
import React from 'react'
import SearchForm from './SearchForm'
import { MenuIcon } from './Icons/MenuIcon'

const MobileNavbar = () => {
    return (
        <div className='block md:hidden '>
            <div className="flex container mx-auto   justify-between items-center w-screen p-4 px-6">
                <Link href={'/'} className="basis-1/4">
                    <h1 className="text-3xl font-bold">PAI<span className='text-yellow-400'>RCA</span>RE</h1>
                </Link>
                <MenuIcon className="text-2xl cursor-pointer"/>
            </div>
            <div className="w-5/6 container mx-auto">
                <SearchForm />
            </div>
        </div>

    )
}

export default MobileNavbar