import React, { FC, useState } from 'react'
import { Arrowdown } from './Icons/Arrowdown'

interface prop {
    size: string | undefined,
    setSize: React.Dispatch<React.SetStateAction<string | undefined>>
}
const SizeFilter: FC<prop> = ({ size, setSize }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full p-4 text-sm   border">
            <div onClick={() => setOpen(!open)} className="flex justify-between">
                <p>SIZE</p>
                <Arrowdown />
            </div>
            <div className={`flex w-full duration-100 ease-in-out ${open ? 'block' : 'hidden'}`}>
                <input value={size } onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSize(e.target.value) } type="text" className="w-full border p-2" />

            </div>
        </div>
    )
}

export default SizeFilter