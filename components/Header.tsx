import React from 'react'
import { Arrowdown } from './Icons/Arrowdown'
import { SearchIcon } from './Icons/SearchIcon'
import { AccountIcon } from './Icons/AccountIcon'
import { CartIcon } from './Icons/CartIcon'
import { FavIcon } from './Icons/FavIcon'
import Link from 'next/link'
import AccountLabel from './AccountLabel'
import SearchForm from './SearchForm'
const Header = () => {
    return (
        <div className="container mx-auto flex items-center w-screen p-4">
            <Link href={'/'} className="basis-1/4">
                <h1 className="text-3xl font-bold">PAI<span className='text-yellow-400'>RCA</span>RE</h1>
            </Link>
            <div className="basis-2/4 ">
               <SearchForm/>
            </div>
            <div className="basis-1/4 flex w-full items-center justify-center">
            <AccountLabel/>
                <div className="basis-1/4  text-2xl "><FavIcon/></div>
                <Link href={'/cart'} className="basis-1/4  text-2xl"><CartIcon/></Link>
            </div>

        </div>
    )
}

export default Header