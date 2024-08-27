import React, { FC } from 'react'
import Category from './Category'

const CategoryList:FC = () => {

  return (
    <div className="container mx-auto p-4">
      <h1 className='font-semibold text-2xl py-2'>Our Top Categories</h1>
      <div className=" flex text-2xl justify-evenly">
     <Category name='books'/>
     <Category name='electronics'/>
     <Category name='furniture'/>
     <Category name='mens'/>
     <Category name='shoes'/>
     <Category name='sports'/>
     <Category name='toys'/>
     <Category name='womens'/>
    
    </div>
    </div>
  )
}

export default CategoryList