'use client'
import ApiErrorResponse from '@/Services/ApiErrorResponse'
import { getTotalSalesByMonth } from '@/Services/dashboard.services'
import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { salesByMonthType } from './Types/salesByMonthType'

const SimpleAreaChart = () => {
  const[data,setData]=useState<salesByMonthType[]>([])
  useEffect(()=>{
    getTotalSalesByMonth().then(({data})=>{
      console.log(data);
      setData(data)
    }).catch((error)=>ApiErrorResponse(error))
  },[])
  return (
    <ResponsiveContainer width={'100%'} height={'100%'} className={''}>

    <AreaChart
      
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="month" />
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="totalSales" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </ResponsiveContainer>

  )
}

export default SimpleAreaChart