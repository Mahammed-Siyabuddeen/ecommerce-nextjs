import React, { ChangeEvent, FC, SetStateAction } from 'react'
import { categoryType } from './CategoryType'

interface prop {
    category: string,
    setCategory:React.Dispatch<SetStateAction<categoryType>>
}
const CatergoySelect:FC<prop> = ({category,setCategory}) => {
  return (
    <select className='w-full p-4 outline-none bg-inherit border my-2' value={category} onChange={(e:ChangeEvent<HTMLSelectElement>)=>setCategory(e.target.value)}>
        <option value="Book">Bookes</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Mens">Mens</option>
        <option value="Womens">Womens</option>
        <option value="Shoes">Shoes</option>
        <option value="Sports">Sports</option>
        <option value="Toys">Toys</option>
    </select>
  )
}

export default CatergoySelect