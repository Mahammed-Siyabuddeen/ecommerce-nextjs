'use client'
import React, { useState } from 'react'
import { ShopButton } from '../../components/ShopButton'
import { ShopIcon } from '../../components/Icons/ShopIcon'
import Image from 'next/image'
import ProductDetails from '@/app/components/ProductDetails'
import Header from '@/app/components/Header'

const Page = () => {
  
  return (
    <div>
      <Header/>
      <ProductDetails/>
    </div>
  )
}

export default Page
