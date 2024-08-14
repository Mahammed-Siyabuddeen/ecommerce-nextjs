'use client'
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { EyeClosedIcon } from './Icons/EyeClosedIcon'
import { EyeOpenIcon } from './Icons/EyeOpenIcon'
import { GoogleIcon } from './Icons/GoogleIcon';
import { CredentialResponse, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/features/redux/store';
import { setUser } from '@/features/authSlice';
import { googleAuth } from '@/Services/googleAuth.services';
import { useRouter } from 'next/navigation';
import GoogleLoginComponent from './GoogleLogin';
import { LoginApi } from '@/Services/login.service';
import ApiErrorResponse from '@/Services/ApiErrorResponse';

const Login: FC = () => {
    const [isOpen, setIsOpne] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter()
    const Dispatch = useDispatch<AppDispatch>()
    const user = useSelector((state: RootState) => state.user)
    const handleClick = (e:FormEvent) => {
        e.preventDefault();
        LoginApi({ email, password }).then(({ data }) => {
            Dispatch(setUser(data))
            router.push('/')
        }).catch(err =>ApiErrorResponse(err) )

    }
    return (
        <form onSubmit={(e:FormEvent)=>handleClick(e) } className="container ml-auto mr-auto w-2/6 my-12 flex flex-col gap-4">
            <div>
                <h1 className='text-3xl font-semibold'>Login</h1>
                <p className='text-sm font-medium'>Hi, Welcome back</p>
            </div>

            <div className='shadow-sm flex justify-center'>
                <GoogleLoginComponent />
            </div>
            <div className='text-center text-slate-400'>or Login with Email</div>
            <div className=" font-medium gap-1 flex flex-col shadow-sm">
                <label htmlFor="">Email</label>
                <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} required type="text" className='w-full outline-none  border rounded-md p-3 font-medium' />
            </div>
            <div className=" font-medium gap-1 flex flex-col shadow-sm">
                <label htmlFor="">Password</label>
                <div className='flex justify-between px-3 items-center border rounded-md p-3 font-medium w-full'>
                    <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} required type={isOpen ? "text" : "password"} className=' outline-none  grow' />
                    {
                        isOpen ? (<EyeClosedIcon onClick={() => setIsOpne(!isOpen)} />) : (<EyeOpenIcon onClick={() => setIsOpne(!isOpen)} />)
                    }
                </div>
            </div>
            <div className="font-medium text-end  text-yellow-400 cursor-pointer">forget Password?</div>
            <button type='submit' className="text-center bg-yellow-400  p-3 rounded-md ">Login</button>
            <div className="text-center">
                <p>not registered yet?<span className=' text-yellow-400 cursor-pointer' onClick={() => router.push('/signup')}> Create account</span></p>
            </div>
        </form>
    )
}

export default Login