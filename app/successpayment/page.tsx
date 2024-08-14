'use client'
import PaymentSuccessAnimation from '@/components/PaymentSuccessAnimation'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const page = () => {

  return (
    <div className='h-screen flex items-center g-3 flex-col justify-center'>
      <PaymentSuccessAnimation />
      <motion.h1
        className="text-2xl font-bold text-green-600"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.95, ease: 'easeInOut' }}
      >
        Payment Successful
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.95, ease: 'easeInOut' }}
      >

        <Link href={'/'}><button className="p-3 px-6 m-3 bg-yellow-400 rounded">Home </button></Link>
        <Link href={'/orders'}><button className="p-3 px-6 m-3 bg-yellow-400 rounded">Orders </button></Link>
      </motion.div>
    </div>
  )
}

export default page