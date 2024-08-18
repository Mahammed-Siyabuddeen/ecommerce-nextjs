import React, { FC, useState } from 'react'
import { Arrowdown } from './Icons/Arrowdown'

interface prop {
    rating: string | undefined,
    setRating: React.Dispatch<React.SetStateAction<string | undefined>>
}
const RatingFilter: FC<prop> = ({ rating, setRating }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full p-4 text-sm  justify-between border">
            <div onClick={() => setOpen(!open)} className="flex justify-between">
                <p>CUSTOMER RATING</p>
                <Arrowdown />
            </div>
            <div className={`flex w-full duration-100 ease-in-out ${open ? 'block' : 'hidden'}`}>
                <input value={rating } onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setRating(e.target.value)} type="text" className="w-full border p-2" />

            </div>
        </div>
    )
}

export default RatingFilter