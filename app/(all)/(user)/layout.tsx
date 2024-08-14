'use client';
import { clearUser, userType } from '@/features/authSlice';
import { AppDispatch } from '@/features/redux/store';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
export default function UserLayout({ children }: { children: React.ReactNode }) {
    const isLoggin = true;
    const Dispatch = useDispatch<AppDispatch>()
    const [isvalidtoken, setValidToken] = useState<boolean | null>(null)
    const router = useRouter();

    useEffect(() => {
        function verifytoken() {
            try {
                const userdata = localStorage.getItem('profile');
                if (!userdata) return;
                const user = JSON.parse(userdata) as userType;
                if (!user) return;
                const de=jwtDecode(user.token)
                if(typeof de.exp==='undefined') return;
                if(de.exp*1000<new Date().getTime())
                     setValidToken(false)
                setValidToken(true);
            } catch (error) {
                console.log(error);
                setValidToken(false);

            }

        }
        verifytoken()
    }, [router])


    useEffect(()=>{
        if(isvalidtoken===false){
            router.push('/login');
        }
    },[router,isvalidtoken])

    if(isvalidtoken===null) return <>Loading</>
    return (
        <div>
            {children}
        </div>
    )
}