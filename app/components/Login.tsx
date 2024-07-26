import React, { FC, useState } from 'react'
import { EyeClosedIcon } from './Icons/EyeClosedIcon'
import { EyeOpenIcon } from './Icons/EyeOpenIcon'
import { GoogleIcon } from './Icons/GoogleIcon';

const Login :FC= () => {
    const [isOpen, setIsOpne] = useState<boolean>(false);

    return (
        <div className="container ml-auto mr-auto w-2/6 my-12 flex flex-col gap-4">
            <div>
                <h1 className='text-3xl font-semibold'>Login</h1>
                <p className='text-sm font-medium'>Hi, Welcome back</p>
            </div>

            <div className='shadow-sm'>
                <button className="w-full p-3 font-medium items-center rounded-md flex gap-3 justify-center border border-slate-400"><GoogleIcon />Login with Google</button>
            </div>
            <div className='text-center text-slate-400'>or Login with Email</div>
            <div className=" font-medium gap-1 flex flex-col shadow-sm">
                <label htmlFor="">Email</label>
                <input type="text" className='w-full outline-none  border rounded-md p-3 font-medium' />
            </div>
            <div className=" font-medium gap-1 flex flex-col shadow-sm">
                <label htmlFor="">Password</label>
                <div className='flex justify-between px-3 items-center border rounded-md p-3 font-medium w-full'>
                    <input type={isOpen ? "text" : "password"} className=' outline-none  grow' />
                    {
                        isOpen ? (<EyeClosedIcon onClick={() => setIsOpne(!isOpen)} />) : (<EyeOpenIcon onClick={() => setIsOpne(!isOpen)} />)
                    }
                </div>
            </div>
            <div className="font-medium text-end  text-yellow-400 cursor-pointer">forget Password?</div>
            <button className="text-center bg-yellow-400  p-3 rounded-md ">Login</button>
            <div className="text-center">
                <p>not registered yet?<span className=' text-yellow-400 cursor-pointer'> Create account</span></p>
            </div>
        </div>
    )
}

export default Login