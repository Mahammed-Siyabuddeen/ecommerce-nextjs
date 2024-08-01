import React, { FC } from 'react'
import { SemiStarIcon } from './Icons/StarIcon'
import Image from 'next/image'
import Product from './Product'

const Products: FC = () => {
    return (
        <div className='container mx-auto py-3'>
            <h1 className=" font-semibold text-2xl py-2"> Products</h1>
            <div className="grid  gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                <Product color='white' />
                <Product color='white' />
                <Product color='white' />
                <Product color='white' />
                <Product color='white' />
                <Product color='white' />
                <Product color='white' />
                <Product color='white' />
            </div>
        </div>
    )
}

export default Products