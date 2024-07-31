import React, { ChangeEvent } from 'react'

const ShoesCategorys = ({handleCheckboxChange}:{handleCheckboxChange:(value: string) => void}) => {
  return (
    <>
      <label htmlFor="">Size :</label>
      <div className="flex gap-2 px-3">
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'7'} type="checkbox" />
        <label htmlFor="">7</label>
      </div>
      <div className="flex gap-2 px-3">
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'8'} type="checkbox" />
        <label htmlFor="">8</label>
      </div>
      <div className="flex gap-2 px-3">
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'9'} type="checkbox" />
        <label htmlFor="">9</label>
      </div>
      <div className="flex gap-2 px-3">
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'10'} type="checkbox" />
        <label htmlFor="">10</label>
      </div>
      <div className="flex gap-2 px-3">
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'11'} type="checkbox" />
        <label htmlFor="">11</label>
      </div>
      <div className="flex gap-2 px-3 ">
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'12'} type="checkbox" />
        <label htmlFor="">12</label>
      </div>
    </>
  )
}

export default ShoesCategorys