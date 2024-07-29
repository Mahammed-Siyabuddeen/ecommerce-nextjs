import React, { ChangeEvent } from 'react'

const ClothesSize = ({handleCheckboxChange}:{handleCheckboxChange:(value: string) => void}) => {
    return (
        <>
            <label htmlFor="">Size :</label>
            <div className="flex gap-2 px-3">
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'S'} type="checkbox" />
                <label htmlFor="">S</label>
            </div>
            <div className="flex gap-2 px-3">
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'M'} type="checkbox" />
                <label htmlFor="">M</label>
            </div>
            <div className="flex gap-2 px-3">
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'L'} type="checkbox" />
                <label htmlFor="">L</label>
            </div>
            <div className="flex gap-2 px-3">
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'XL'} type="checkbox" />
                <label htmlFor="">XL</label>
            </div>
            <div className="flex gap-2 px-3">
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'XXL'} type="checkbox" />
                <label htmlFor="">XXL</label>
            </div>
            <div className="flex gap-2 px-3">
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e.target.value)} value={'XXXL'} type="checkbox" />
                <label htmlFor="">XXXL</label>
            </div>
        </>
    )
}

export default ClothesSize