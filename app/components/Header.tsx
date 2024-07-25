import React from 'react'
import { Arrowdown } from './Icons/Arrowdown'
import { SearchIcon } from './Icons/SearchIcon'
import { AccountIcon } from './Icons/AccountIcon'
import { CartIcon } from './Icons/CartIcon'
import { FavIcon } from './Icons/FavIcon'
const Header = () => {
    return (
        <div className="container mx-auto flex items-center w-screen p-4">
            <div className="basis-1/4">
                <h1 className="text-3xl font-bold">PAI<span className='text-yellow-400'>RCA</span>RE</h1>
            </div>
            <div className="basis-2/4 ">
                <div className="flex w-4/5 border rounded-md overflow-hidden ">
                    <input type="text" className="w-7/12 border-r outline-none" />

                    <div className="w-3/12 p-2 flex justify-between items-center">
                        <div>category</div>
                        <Arrowdown />
                    </div>
                    <button className="w-2/12  p-2 bg-black text-white text-2xl flex  justify-center  "><SearchIcon /></button>
                </div>
            </div>
            <div className="basis-1/4 flex w-full items-center justify-center">
                <div className="basis-2/4 justify-center  flex items-center"><span className='text-xl'><AccountIcon/></span>Account</div>
                <div className="basis-1/4  text-2xl "><FavIcon/></div>
                <div className="basis-1/4  text-2xl"><CartIcon/></div>
            </div>

        </div>
    )
}

export default Header