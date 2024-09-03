'use client'
import React, { useState } from 'react'
import { AccountIcon } from './Icons/AccountIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/features/redux/store';
import PopUpAccountComponent from './PopUpAccountComponent';

const PopupAccount = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector((state: RootState) => state.user)
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div onClick={toggleModal} className="cursor-pointer basis-2/4 justify-center gap-1  flex items-center">
                <span className='text-xl'><AccountIcon /></span>{user.first_name}
            </div>

            {isOpen && (
               <PopUpAccountComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
            )}
        </>
    )
}

export default PopupAccount