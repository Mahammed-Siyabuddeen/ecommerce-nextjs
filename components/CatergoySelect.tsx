import React, { ChangeEvent, FC, SetStateAction } from 'react'
import { categoryType } from './Types/categoryType'

interface prop {
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  categoryList: categoryType[]
}
const CatergoySelect: FC<prop> = ({ category, setCategory, categoryList }) => {
  return (
    <select required className='w-full p-4 outline-none bg-inherit border my-2' value={category} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}>
      {
        categoryList.map((data: categoryType) => (
          <option key={data._id} value={data._id}>{data.name}</option>

        ))
      }
    </select>
  )
}

export default CatergoySelect