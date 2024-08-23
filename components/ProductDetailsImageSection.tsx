'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductDetailsImageSection = ({ImagesUrls}:{ImagesUrls:string[]}) => {
  const [currentImage,setCurrentImage]=useState(ImagesUrls[0])
  const handlechangeImage=(url:string)=>{
    setCurrentImage(url)
  }
  return (
    <>
      <div className='transition hover:scale-110 relative w-full p-10 h-3/4 overflow-hidden'>

        <Image fill loading='lazy' src={currentImage} alt="ds" />
      </div>
      <div className="grid w-full grid-cols-4 pt-4 gap-3 px-5 h-1/5">
        {
          ImagesUrls.map((url: string) => (
            <div key={url} className=' relative' onClick={()=>handlechangeImage(url)}>
              <Image fill loading='lazy' src={url} alt="" />
            </div>

          ))
        }
      </div>
    </>
  )
}

export default ProductDetailsImageSection