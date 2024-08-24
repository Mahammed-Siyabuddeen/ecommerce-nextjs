'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { EyeClosedIcon } from '@/components/Icons/EyeClosedIcon'
import { toast } from 'sonner'
import { EyeOpenIcon } from '@/components/Icons/EyeOpenIcon'
import { resetPaaswordApi } from '@/Services/resetPasswordApi.service'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { useDispatch } from 'react-redux'
import { setUser } from '@/features/authSlice'
const PageComponent = () => {
    const params = useParams()
    const Dispatch=useDispatch()
    const router=useRouter()
    const [isOpen, setIsOpne] = useState<boolean>(false);
    const [issOpenRPasword, setIssOpenRPasword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [rpassword, setrpassword] = useState('')
    
    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        if (!password.length) return toast.error("enter password")
        if(password!==rpassword) return toast.error("repeat password shoul be same");
        resetPaaswordApi({password,token:params.token as string})
        .then(({data})=>{
            toast("success password changed");
            Dispatch(setUser(data));
            router.push('/')
        })
        .catch((error)=>ApiErrorResponse(error))
    }
    return (
        <form onSubmit={(e: FormEvent) => handleClick(e)} className="container ml-auto mr-auto w-2/6 my-12 flex flex-col gap-4">
            <div>
                <h1 className='text-3xl font-semibold'>Forget Password</h1>
            </div>
            <div className='text-center text-slate-400'>or Login with Email</div>
            <div className=" font-medium gap-1 flex flex-col shadow-sm">
                <label htmlFor="">Password</label>
                <div className='flex justify-between px-3 items-center border rounded-md p-3 font-medium w-full'>
                    <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)} required type={isOpen ? "text" : "password"} className=' outline-none  grow' />
                    {
                        isOpen ? (<EyeClosedIcon onClick={() => setIsOpne(!isOpen)} />) : (<EyeOpenIcon onClick={() => setIsOpne(!isOpen)} />)
                    }
                </div>
            </div>
            <div className=" font-medium gap-1 flex flex-col shadow-sm">
                <label htmlFor="">Reset password</label>
                <div className='flex justify-between px-3 items-center border rounded-md p-3 font-medium w-full'>
                    <input onChange={(e:ChangeEvent<HTMLInputElement>)=>setrpassword(e.target.value)} required type={issOpenRPasword ? "text" : "password"} className=' outline-none  grow' />
                    {
                        issOpenRPasword ? (<EyeClosedIcon onClick={() => setIssOpenRPasword(!issOpenRPasword)} />) : (<EyeOpenIcon onClick={() => setIssOpenRPasword(!issOpenRPasword)} />)
                    }
                </div>
            </div>
            <div className="font-medium text-end  text-yellow-400 cursor-pointer">Back to Login</div>
            <button type='submit' className="text-center bg-yellow-400  p-3 rounded-md ">send</button>

        </form>
    )
}

export default PageComponent