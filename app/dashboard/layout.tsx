import DashboardLeft from '@/components/DashboardLeft'
import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh overflow-hidden">
      <DashboardLeft />
      <div className="basis-4/5 flex">
        {children}
      </div>
      <div className="basis-1/5 border-l ">
        <h1>llfd</h1>
      </div>
    </div>
  )
}

export default DashboardLayout