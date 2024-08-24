'use client';
import DashboardLeft from '@/components/DashboardLeft'
import Loading from '@/components/Loading';
import { adminType } from '@/components/Types/adminType';
import { clearAdmin } from '@/features/adminSlice';
import { AppDispatch } from '@/features/redux/store';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isvalidtoken, setValidToken] = useState<boolean | null>(null)
  const router = useRouter();
  const Dispatch = useDispatch()

  useEffect(() => {
    try {
      const admin = JSON.parse(localStorage.getItem('adminProfile') as string) as adminType;
      if (!admin) throw new Error("login")
      const decoded = jwtDecode(admin.token);
      if ((decoded.exp as number) * 1000 < new Date().getTime()) {
        Dispatch(clearAdmin());
        throw new Error("login");
      }
      setValidToken(true)
    } catch (error) {
      router.push('/admin-auth')
    }
  },[Dispatch,router])

  if (isvalidtoken == null) return <Loading />
  return (
    <div className="flex h-dvh overflow-hidden">
      <DashboardLeft />
      <div className="basis-4/5 flex">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout