'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Loading from './Loading'
import Products from './Products'
import BrandFilter from './BrandFilter'
import RatingFilter from './RatingFilter'
import SizeFilter from './SizeFilter'
import RangeFilter from './RangeFilter'
import { getAllProductsapi } from '@/Services/products.services'
import { PriceRangeType } from './Types/priceRange'
import { productType } from './Types/productType'
import { useSearchParams, useRouter } from 'next/navigation'
import { AnimatePresence,motion } from 'framer-motion'

const Search = () => {
    const [data, setData] = useState<productType[]>([])
    const [priceRange, setPriceRange] = useState<PriceRangeType>()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const searchParams = useSearchParams();
    const [size, setSize] = useState<string | undefined>(undefined);
    const [price, setPrice] = useState<string | undefined>(undefined);
    const [brand, setBrand] = useState<string | undefined>(undefined);
    const [rating, setRating] = useState<string | undefined>(undefined);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

    useEffect(() => {
        setLoading(true)
        const searchByName = searchParams.get('name') || undefined
        const searchByCategory = searchParams.get('category') || undefined
        getAllProductsapi({ name: searchByName, category: searchByCategory })
            .then(({ data }) => {
                setData(data)
                const minAndMax: PriceRangeType = (data as productType[]).reduce<PriceRangeType>((acc, product) => {
                    if (product.price < acc.min) {
                        acc.min = product.price;
                    }
                    if (product.price > acc.max) {
                        acc.max = product.price;
                    }
                    return acc;
                }, { min: Infinity, max: -Infinity });
                setPriceRange(minAndMax)
            })
            .catch((err) => console.log(err)
            )
        setLoading(false)
    }, [searchParams])

    useEffect(() => {
        setLoading(true)
        const searchByName = searchParams.get('name') || undefined
        const searchByCategory = searchParams.get('category') || undefined
        getAllProductsapi({ name: searchByName, category: searchByCategory, price, size, rating, brand })
            .then(({ data }) => {
                setData(data)
            })
            .catch((err) => console.log(err)
            )
        setLoading(false)
    }, [price, size, rating, brand])

    const clearFilter = () => {
        setBrand(undefined);
        setPrice(undefined);
        setRating(undefined);
        setMobileFilterOpen(false)

    }

    const variants={
        open:{opacity:1,x:0,transition:{duration:0.3}},
        close:{opacity:0,x:"-100%",transition:{duration:0.3}}
    }

    if (mobileFilterOpen)
        return (
            <AnimatePresence>
                <motion.div
                initial="close"
                animate="open"
                exit="close"
                variants={variants}
                className='w-screen flex flex-col  h-screen bg-yellow-400  text-slate-950'>
                    <div className="w-full p-4 flex justify-between">
                        <h1 className="font-medium">Filter</h1>
                        <button className='cursor-pointer px-4' onClick={clearFilter}>Clear All</button>
                    </div>
                    <RangeFilter priceRange={priceRange} price={price} setPrice={setPrice} />
                    <SizeFilter size={size} setSize={setSize} />
                    <RatingFilter rating={rating} setRating={setRating} />
                    <BrandFilter brand={brand} setBrand={setBrand} />
                    <button onClick={()=>setMobileFilterOpen(false)} className="m-4 ml-auto bg-slate-950 text-white rounded px-4 py-2">Filter</button>
                </motion.div>
            </AnimatePresence>
        )
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-4 h-full w-full my-12">

            <div className="hidden basis-1/5 bg-gray-100  rounded md:flex flex-col  ">
                <div className="w-full p-4 flex justify-between">
                    <h1 className="font-medium">Filter</h1>
                    <button className='text-yellow-500' onClick={clearFilter}>Clear All</button>
                </div>
                <RangeFilter priceRange={priceRange} price={price} setPrice={setPrice} />
                <SizeFilter size={size} setSize={setSize} />
                <RatingFilter rating={rating} setRating={setRating} />
                <BrandFilter brand={brand} setBrand={setBrand} />
            </div>

            <button onClick={()=>setMobileFilterOpen(true)} className="ml-auto block md:hidden bg-yellow-400 text-slate-950 px-4 py-2 max-w-max rounded mx-4 cursor-pointer">Filters</button>

            <div className="flex-1 md:basis-4/5  bg-gray-100 flex flex-col  gap-4 rounded p-4">
                <>
                    {
                        loading ? (<Loading />) : (<Products products={data} />)
                    }
                </>
            </div>
        </div>
    )
}

// export default SearchComponent

export function SearchComponent() {
    return (
        <Suspense>
            <Search />
        </Suspense>
    )
}