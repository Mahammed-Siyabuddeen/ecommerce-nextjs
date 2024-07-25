import React, { FC } from 'react'

const Navigation :FC= () => {
  return (
    <nav className='container mx-auto'>
        <ul className="flex gap-5 py-3 text-slate-500 justify-end list-none">
            <li>Home</li>
            <li>Today deals</li>
            <li>Customer Services</li>
            <li>Trending Product</li>
            <li>Blog</li>

        </ul>
    </nav>
  )
}

export default Navigation