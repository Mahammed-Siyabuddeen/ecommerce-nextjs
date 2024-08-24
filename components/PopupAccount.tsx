'use client'
import React, { useState } from 'react'
import { AccountIcon } from './Icons/AccountIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/features/redux/store';
import { clearUser } from '@/features/authSlice';

const PopupAccount = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector((state: RootState) => state.user)
    const Dispatch=useDispatch()
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const Logout=()=>{
        if(!window.confirm('are sure want to logout')) return;
        Dispatch(clearUser());
        window.location.href='/'
    }
    return (
        <>
            <div onClick={toggleModal} className="cursor-pointer basis-2/4 justify-center gap-1  flex items-center">
                <span className='text-xl'><AccountIcon /></span>{user.first_name}
            </div>

            {isOpen && (
                <div
                    id="select-modal"
                    tabIndex={-1}
                    aria-hidden={!isOpen}
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Account Details
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={toggleModal}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-4 md:p-5">
                                <ul className="space-y-4 mb-4">
                                    <li>

                                        <label
                                            htmlFor="job-1"
                                            className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">
                                                    First Name
                                                </div>
                                                <div className="w-full text-gray-500 dark:text-gray-400">
                                                    {user.first_name}
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>

                                        <label
                                            htmlFor="job-1"
                                            className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">
                                                    Last Name
                                                </div>
                                                <div className="w-full text-gray-500 dark:text-gray-400">
                                                    {user.last_name}
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>

                                        <label
                                            htmlFor="job-1"
                                            className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">
                                                    Email
                                                </div>
                                                <div className="w-full text-gray-500 dark:text-gray-400">
                                                    {user.email}
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>

                                        <label
                                            htmlFor="job-1"
                                            className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                                        >
                                            <div className="block">
                                                <div className="w-full text-lg font-semibold">
                                                    Phone Number
                                                </div>
                                                <div className="w-full text-gray-500 dark:text-gray-400">
                                                    {typeof user.phone_number !== 'undefined' ? user.phone_number[0] : ''}
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                    <button onClick={Logout} className=" inline-flex w-full justify-center bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                        Logout
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PopupAccount