'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchForm from './SearchForm'
import { MenuIcon } from './Icons/MenuIcon'
import { MultiplyIcon } from './Icons/MultiplyIcon'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/redux/store'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import PopUpAccountComponent from './PopUpAccountComponent'

const MobileNavbar = () => {
    const user = useSelector((state: RootState) => state.user)
    const [open, setOpen] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const router = useRouter()
    const handleClick = (path: string) => {
        setOpen(false);
        router.push(path)
    }
    const modalVariants = {
        hidden: {
            y: '-100vh'
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        }
    }
    const handleAccountInfoClick = () => {
        setOpen(false);
        setIsPopupOpen(true);
    }

    if (open)
        return (
            <AnimatePresence>
                <motion.div
                    key={'model'}
                    variants={modalVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className="absolute h-full w-full top-0 bg-yellow-400 text-slate-950 z-50">
                    <MultiplyIcon onClick={() => setOpen(false)} className='absolute right-6 top-6 text-3xl font-bold cursor-pointer' />
                    <div className="flex flex-col justify-center  gap-8 items-center h-full ">
                        <p className='font-bold text-2xl cursor-pointer' onClick={() => handleClick('/')}>Home</p>
                        <p className='font-bold text-2xl cursor-pointer' onClick={() => handleClick('/cart')}>Cart</p>
                        <p className='font-bold text-2xl cursor-pointer' onClick={() => handleClick('/orders')}>Orders</p>
                        {
                            user.first_name.length ?
                                <p className='font-bold text-2xl cursor-pointer' onClick={handleAccountInfoClick}>{user.first_name}</p>
                                : <p className='font-bold text-2xl cursor-pointer' onClick={() => handleClick('/login')}>Accounts</p>
                        }
                    </div>
                </motion.div>
            </AnimatePresence>
        )

    if (isPopupOpen)
        return (
            <PopUpAccountComponent isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
        )

    return (
        <div className=' md:hidden '>
            <div className="flex container mx-auto   justify-between items-center w-screen p-4 px-6">
                <Link href={'/'} className="basis-1/4">
                    <h1 className="text-3xl font-bold">PAI<span className='text-yellow-400'>RCA</span>RE</h1>
                </Link>
                <MenuIcon onClick={() => setOpen(true)} className="text-2xl cursor-pointer" />
            </div>
            <div className="w-5/6 container mx-auto">
                <SearchForm />
            </div>
        </div>

    )
}

export default MobileNavbar