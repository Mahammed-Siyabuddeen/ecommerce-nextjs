import React, { FC } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',];

type datatypes={
    name:string,
    value:number
}

const ProductCategorychart = ({data}:{data:datatypes[]}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        label
      >
        {data.map((entry:datatypes, index:number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
    )
}

export default ProductCategorychart