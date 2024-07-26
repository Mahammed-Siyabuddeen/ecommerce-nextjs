import React, { useState,FormEvent,ChangeEvent } from 'react'
import { EyeClosedIcon } from './Icons/EyeClosedIcon';
import { EyeOpenIcon } from './Icons/EyeOpenIcon';
import { GoogleIcon } from './Icons/GoogleIcon';

const Signup = () => {
  const [isOpen, setIsOpne] = useState<boolean>(false);
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [phone, setphone] = useState<number>()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [rpassword, setrpassword] = useState('')
    const [checkinput, setcheckinput] = useState(false)

    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        setcheckinput(true);
        if(fname.length<0 ||lname.length<0|| email.length<0||password.length|| password!==rpassword||phone==undefined)
            return;


    }
  return (
    <form method='post' onSubmit={(e: FormEvent) => handlesubmit(e)} className="container ml-auto mr-auto w-3/6 my-12 flex flex-col gap-4">
            <div>
                <h1 className='text-3xl font-semibold'>Signup</h1>
            </div>

            <div className='shadow-sm'>
                <button className="w-full p-3 font-medium items-center rounded-md flex gap-3 justify-center border border-slate-400"><GoogleIcon />Login with Google</button>
            </div>

            <div className='text-center text-slate-400'>or Signup with Email</div>

            <div className=" font-medium gap-1 flex  shadow-sm  w-fll">
                <div className='basis-2/4 flex flex-col gap-1 '>
                    <label htmlFor="">First Name</label>
                    <input value={fname} onChange={(e: ChangeEvent<HTMLInputElement>) => setfname(e.target.value)} placeholder='enter first name' name='fname' type="text" className={`w-full outline-none  border rounded-md p-3 font-medium ${checkinput && fname.length < 1 ? 'border-red-500' : ''}`} />

                </div>
                <div className='basis-2/4 flex flex-col gap-1'>
                    <label htmlFor="">Last name</label>
                    <input value={lname} onChange={(e: ChangeEvent<HTMLInputElement>) => setlname(e.target.value)} placeholder='enter last name' name='lname' type="text" className={`w-full outline-none  border rounded-md p-3 font-medium ${checkinput && lname.length < 1 ? 'border-red-500' : ''}`} />

                </div>
            </div>
            <div className=" font-medium gap-1 flex shadow-sm w-full">
                <div className='basis-2/4 flex flex-col gap-1'>
                    <label htmlFor="">Phone</label>
                    <input value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setphone(Number(e.target.value))} placeholder='enter your number' name='phone' type="tel" className={`w-full outline-none  border rounded-md p-3 font-medium ${checkinput && phone == undefined ? 'border-red-500' : ''}`} />

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
                <p>not registered yet?<span className=' text-yellow-400 cursor-pointer'> Create account</span></p>
            </div>
        </form>
  )
}

export default Signup