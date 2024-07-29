import React from 'react'
import DashboardLeft from '../components/DashboardLeft'

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-dvh overflow-hidden">
            <DashboardLeft />
            <div className="basis-4/5 flex">
                {children}
                <div className="basis-1/5 border-l ">

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout