import React, { FC } from 'react'
import { SemiStarIcon } from './Icons/StarIcon'
import Image from 'next/image'

const Products: FC = () => {
    return (
        <div className='container mx-auto py-3'>
            <h1 className=" font-semibold text-2xl py-2"> Products</h1>
            <div className="grid  gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                <div className="p-3 rounded-sm">
                    <div className="h-64  relative bg-white">
                        <Image fill className=' ' src="/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold pt-2'>Product Name Will Be Here</h3>
                        <p className='text-sm text-slate-800 font-semibold'>Brand Name</p>
                        <div className="flex  items-center">
                            <div className='flex gap-1 items-center pr-3 border-r-2 '><span className='text-yellow-600 text-xl'><SemiStarIcon/></span> 4.5</div>
                            <div className='pl-3' >4500 sold</div>
                        </div>
                        <div className="flex gap-3">
                            <p className='line-through text-slate-950 opacity-80'>&#8377; 30</p>
                            <p>&#8377; 24</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 rounded-sm">
                    <div className="h-64  relative w-full bg-white">
                        <Image fill  className=' ' src="/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold pt-2'>Product Name Will Be Here</h3>
                        <p className='text-sm text-slate-800 font-semibold'>Brand Name</p>
                        <div className="flex  items-center">
                            <div className='flex gap-1 items-center pr-3 border-r-2 '><span className='text-yellow-600 text-xl'><SemiStarIcon/></span> 4.5</div>
                            <div className='pl-3' >4500 sold</div>
                        </div>
                        <div className="flex gap-3">
                            <p className='line-through text-slate-950 opacity-80'>&#8377; 30</p>
                            <p>&#8377; 24</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 rounded-sm">
                    <div className="h-64  relative bg-white">
                        <Image fill  className=' ' src="/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold pt-2'>Product Name Will Be Here</h3>
                        <p className='text-sm text-slate-800 font-semibold'>Brand Name</p>
                        <div className="flex  items-center">
                            <div className='flex gap-1 items-center pr-3 border-r-2 '><span className='text-yellow-600 text-xl'><SemiStarIcon/></span> 4.5</div>
                            <div className='pl-3' >4500 sold</div>
                        </div>
                        <div className="flex gap-3">
                            <p className='line-through text-slate-950 opacity-80'>&#8377; 30</p>
                            <p>&#8377; 24</p>
                        </div>
                    </div>
                </div>
                <div className="p-3 rounded-sm">
                    <div className="h-64  relative bg-white">
                        <Image fill  className=' ' src="/images/favpng_apple-watch-series-2-apple-watch-series-3-apple-watch-series-1.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold pt-2'>Product Name Will Be Here</h3>
                        <p className='text-sm text-slate-800 font-semibold'>Brand Name</p>
                        <div className="flex  items-center">
                            <div className='flex gap-1 items-center pr-3 border-r-2 '><span className='text-yellow-600 text-xl'><SemiStarIcon/></span> 4.5</div>
                            <div className='pl-3' >4500 sold</div>
                        </div>
                        <div className="flex gap-3">
                            <p className='line-through text-slate-950 opacity-80'>&#8377; 30</p>
                            <p>&#8377; 24</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Products