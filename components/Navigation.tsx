import React, { FC } from 'react'

const Navigation :FC= () => {
  return (
    <nav className='container mx-auto'>
        <ul className="flex gap-5 p-3 text-slate-500 justify-end list-none">
            <li className='cursor-pointer font-semibold'>Home</li>
            <li className='cursor-pointer font-semibold'>Today deals</li>
            <li className='cursor-pointer font-semibold'>Customer Services</li>
            <li className='cursor-pointer font-semibold'>Trending Product</li>
            <li className='cursor-pointer font-semibold'>Blog</li>

        </ul>
    </nav>
  )
}

export default Navigation