'use client'
import React from 'react'
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


let data = [
  {
    month: 'jan',
    sale: 13899,
  },
  {
    month: 'feb',
    sale: 10000,
  },
  {
    month: 'march',
    sale: 4560,
  },
  {
    month: 'april',
    sale: 9087,
  },
  {
    month: 'may',
    sale: 6009,
  },
  {
    month: 'june',
    sale: 23000,
  },
]
const SimpleAreaChart = () => {
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>

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
      <Area type="monotone" dataKey="sale" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </ResponsiveContainer>

  )
}

export default SimpleAreaChart