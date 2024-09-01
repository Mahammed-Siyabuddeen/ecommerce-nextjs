import Link from 'next/link'
import React from 'react'
import { LinkedInIcon } from './Icons/LinkedInIcon'

const Footer = () => {
    return (
        <div className="p-10 bg-yellow-400 text-slate-950">
            <div className="w-full flex items-center gap-12 md:gap-2 md:items-start flex-col md:flex-row pb-2">
                <div className="flex-1">
                    <Link href={'/'} className="basis-1/4">
                        <h1 className="text-3xl font-bold">PAI<span className='text-slate-200'>RCA</span>RE</h1>
                    </Link>
                </div>
                <div className="flex-1">
                    <h1 className=" pb-4 text-center md:text-start">ABOUT</h1>
                    <ul className="flex md:flex-col gap-1 list-none">
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h1 className=" pb-4 text-center md:text-start"> LINK</h1>
                    <ul className="flex md:flex-col gap-1 list-none">
                        <li><Link href={'/dashboard'}>Dashboard</Link></li>
                        <li><Link href={'/login'}>Login</Link></li>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/orders'}>Orders</Link></li>
                        <li><Link href={'/cart'}>cart</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex justify-center mt-2 gap-2 items-center">
                <LinkedInIcon className='text-xl'/><Link href={"https://in.linkedin.com/in/mohd-shihab"}>Mohd Shihab</Link>
            </div>
        </div>
    )
}

export default Footer