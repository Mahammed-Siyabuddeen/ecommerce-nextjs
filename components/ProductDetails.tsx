'use client'
import React, { useState } from 'react'
import { ShopIcon } from './Icons/ShopIcon'
import Image from 'next/image'
import { productType } from './Types/productType'
import { addtocart } from '@/Services/cart.service'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/features/redux/store'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import ProductDetailsImageSection from './ProductDetailsImageSection'
import { setCheckoutProduct, setCurrentComponent } from '@/features/checkoutSlice'
import { useRouter } from 'next/navigation'
import SimilarProducts from './SimilarProducts'
import ProductReviews from './ProductReviews'

const ProductDetails = ({ productdetials }: { productdetials: productType }) => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const [currentsize, setCurrentSize] = useState<string | undefined>(productdetials?.sizes[0] || undefined)
  const handleAddToCart = async () => {
    if (!user) return alert('please login');
    try {
      await addtocart({ product_id: productdetials._id, user_id: user._id, size: currentsize })
    } catch (error) {
      ApiErrorResponse(error)
    }
  }
  const handleBuyNow = async () => {
    if (!user) return alert('please login');
    addtocart({ product_id: productdetials._id, user_id: user._id, size: currentsize }).then(({ data }) => {
      dispatch(setCheckoutProduct([
        {
          name: productdetials.name,
          price: productdetials.price,
          brand: productdetials.brand,
          imagesUrl: productdetials.imagesUrl,
          total: productdetials.price * data.quantity,
          product_id: productdetials._id,
          size: currentsize,
          ...data
        }]))
      dispatch(setCurrentComponent('address'))
      router.push('/checkout')
    }).catch((error) => ApiErrorResponse(error))
  }

  return (
    <div className='container  p-3 mx-auto'>
      <div className=" flex items-center bg-orange-50">
        <div className="basis-2/4  p-4 h-dvh relative">
          <ProductDetailsImageSection ImagesUrls={productdetials.imagesUrl} />
        </div>
        <div className="basis-2/4 flex flex-col gap-4 px-6 ">
          <h1 className='text-4xl  font-bold '>{productdetials.name}</h1>
          <p>{productdetials.description}</p>
          <div className="flex gap-3 className='font-medium text-2xl">
            <p className='line-through text-slate-950 opacity-80'>&#8377; {productdetials.mrp}</p>
            <h2 >&#8377; {productdetials.price}</h2>
          </div>
          <div className="flex gap-2">
            {
              productdetials.sizes?.map((size, index) => (

                <div key={index} onClick={() => setCurrentSize(size)} className={`p-2  px-4  cursor-pointer border-2 rounded ${size === currentsize ? 'border-blue-600' : ''}`}>{size}</div>
              ))
            }
          </div>
          <div className="flex gap-4">
            <button onClick={handleBuyNow} className="px-5 py-3 max-w-fit font-medium gap-2 text-center inline-flex items-center text-gray-950 bg-yellow-400 rounded-lg hover:bg-yellow-500  ">
              <ShopIcon />  Buy Now
            </button>
            <button onClick={handleAddToCart} className="px-5 py-3 max-w-fit font-medium gap-2 text-center inline-flex items-center text-gray-950 bg-yellow-400 rounded-lg hover:bg-yellow-500  ">
              <ShopIcon />  Add To Cart
            </button>
          </div>
        </div>
      </div>
      <SimilarProducts category_id={productdetials.category_id} product_id={productdetials._id} />
      <ProductReviews product_id={productdetials._id}/>
    </div>
  )
}

export default ProductDetails