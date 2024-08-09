'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react'
import { EyeClosedIcon } from './Icons/EyeClosedIcon';
import { EyeOpenIcon } from './Icons/EyeOpenIcon';
import { GoogleIcon } from './Icons/GoogleIcon';
import { SignUpApi } from '@/Services/signUp.service';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/redux/store';
import { setUser } from '@/features/authSlice';
import { useRouter } from 'next/navigation';
import GoogleLoginComponent from './GoogleLogin';

const Signup = () => {
    const [isOpen, setIsOpne] = useState<boolean>(false);
    const [first_name, setfname] = useState('')
    const [last_name, setlname] = useState('')
    const [phone_number, setphone] = useState<string>('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [rpassword, setrpassword] = useState('')
    const [checkinput, setcheckinput] = useState(false)

    const Dispatch = useDispatch<AppDispatch>();
    const router = useRouter()
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        setcheckinput(true);

        const data = {
            first_name,
            last_name,
            phone_number,
            email,
            password
        }

        if (first_name.length < 0 || last_name.length < 0 || email.length < 0 || password.length < 0 || password !== rpassword)
            return;

        SignUpApi({ ...data }).then(({ data }) => {
            console.log(data);
            Dispatch(setUser(data));
            router.push('/')
        }).catch((err) => {
            console.log(err);

        })
    }


    return (
        <form method='post' onSubmit={(e: FormEvent) => handlesubmit(e)} className="container ml-auto mr-auto w-3/6 my-12 flex flex-col gap-4">
            <div>
                <h1 className='text-3xl font-semibold'>Signup</h1>
            </div>

            <div className='shadow-sm flex justify-center py-4'>
                <GoogleLoginComponent />
            </div>

            <div className='text-center text-slate-400'>or Signup with Email</div>

            <div className=" font-medium gap-1 flex  shadow-sm  w-fll">
                <div className='basis-2/4 flex flex-col gap-1 '>
                    <label htmlFor="">First Name</label>
                    <input value={first_name} onChange={(e: ChangeEvent<HTMLInputElement>) => setfname(e.target.value)} placeholder='enter first name' name='first_name' type="text" className={`w-full outline-none  border rounded-md p-3 font-medium ${checkinput && first_name.length < 1 ? 'border-red-500' : ''}`} />

                </div>
                <div className='basis-2/4 flex flex-col gap-1'>
                    <label htmlFor="">Last name</label>
                    <input value={last_name} onChange={(e: ChangeEvent<HTMLInputElement>) => setlname(e.target.value)} placeholder='enter last name' name='last_name' type="text" className={`w-full outline-none  border rounded-md p-3 font-medium ${checkinput && last_name.length < 1 ? 'border-red-500' : ''}`} />

                </div>
            </div>
            <div className=" font-medium gap-1 flex shadow-sm w-full">
                <div className='basis-2/4 flex flex-col gap-1'>
                    <label htmlFor="">phone_number</label>
                    <input value={phone_number} onChange={(e: ChangeEvent<HTMLInputElement>) => setphone(e.target.value)} pattern="[7-9]{1}[0-9]{4}[0-9]{5}" placeholder='enter your number' name='phone_number' type="tel" className={`w-full outline-none  border rounded-md p-3 font-medium ${checkinput && phone_number == undefined ? 'border-red-500' : ''}`} />

                </div>
                <div className='basis-2/4 flex flex-col gap-1'>
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setemail(e.target.value)} placeholder='enter your email' name='email' type="email" className={`w-full outline-none  border rounded-md p-3 font-medium ${checkinput && email.length < 1 ? 'border-red-500' : ''}`} />

                </div>

            </div>

            <div className=" font-medium gap-1 flex shadow-sm">
                <div className='basis-2/4 flex flex-col gap-1'>
                    <label htmlFor="">Password</label>
                    <div className={`flex justify-between px-3 items-center border rounded-md p-3 font-medium w-full ${checkinput && password.length < 1 ? 'border-red-500' : ''}`}>
                        <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setpassword(e.target.value)} name='password' placeholder='enter your password' type={isOpen ? "text" : "password"} className=' outline-none  grow' />
                        {
                            isOpen ? (<EyeClosedIcon onClick={() => setIsOpne(!isOpen)} />) : (<EyeOpenIcon onClick={() => setIsOpne(!isOpen)} />)
                        }
                    </div>
                </div>
                <div className='basis-2/4 flex flex-col gap-1'>
                    <label htmlFor="">Password</label>
                    <div className={`flex justify-between px-3 items-center border rounded-md p-3 font-medium w-full ${checkinput && rpassword.length < 1 || rpassword !== password ? 'border-red-500' : ''}`}>
                        <input value={rpassword} onChange={(e: ChangeEvent<HTMLInputElement>) => setrpassword(e.target.value)} placeholder='enter your password' type="password" className=' outline-none  grow' />
                        <EyeClosedIcon />
                    </div>
                </div>

            </div>
            <button type='submit' className="text-center bg-yellow-400  p-3 rounded-md ">Signup</button>
            <div className="text-center">
                <p>Do you have account?<span className=' text-yellow-400 cursor-pointer' onClick={()=>router.push('/login')}> Login</span></p>
            </div>
        </form>
    )
}

export default Signup