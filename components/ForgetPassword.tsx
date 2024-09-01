'use client'
import ApiErrorResponse from '@/Services/ApiErrorResponse';
import { forgetPasswordApi } from '@/Services/forgetPassword.service';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner';

const ForgetPassword = () => {
    const [email, setEmail] = useState<string>('');
    const handleClick = (e: FormEvent) => {
        if(!email.length) return toast("enter email")
        forgetPasswordApi({email:email})
        .then(()=>toast('please check your email'))
        .catch((error)=>ApiErrorResponse(error))
    }
    return (
        <form onSubmit={(e: FormEvent) => handleClick(e)} className="container ml-auto mr-auto w-5/6 md:w-2/6 my-12 flex flex-col gap-4">
            <div>
                <h1 className='text-3xl font-semibold'>Forget Password</h1>
            </div>
            <div className='text-center text-slate-400'>or Login with Email</div>
            <div className=" font-medium gap-1 flex flex-col shadow-sm">
                <label htmlFor="">Email</label>
                <input onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required type="text" className='w-full outline-none  border rounded-md p-3 font-medium' />
            </div>
            <Link href='/login' className="font-medium text-end  text-yellow-400 cursor-pointer">Back to Login</Link>
            <button type='submit' className="text-center bg-yellow-400  p-3 rounded-md ">send</button>

        </form>
    )
}

export default ForgetPassword