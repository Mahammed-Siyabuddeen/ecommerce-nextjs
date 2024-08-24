'use client';
import Loading from '@/components/Loading';
import { userType } from '@/components/Types/userType';
import { clearUser } from '@/features/authSlice';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
export default function UserLayout({ children }: { children: React.ReactNode }) {
    const [isvalidtoken, setValidToken] = useState<boolean | null>(null)
    const router = useRouter();
    const Dispatch = useDispatch()
    useEffect(() => {
        function verifytoken() {
            try {
                const user = JSON.parse(localStorage.getItem('profile') as string) as userType;
                if (!user) throw new Error("login");
                const decoded = jwtDecode(user.token)
                if ((decoded.exp as number) * 1000 < new Date().getTime()) {
                    Dispatch(clearUser());
                    throw new Error("login");
                }
                setValidToken(true);
            } catch (error) {
                router.push('/login')
            }
        }
        verifytoken()
    }, [router,Dispatch])

    if (isvalidtoken === null) return <Loading />
    return (
        <div>
            {children}
        </div>
    )
}