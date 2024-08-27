import React, { FC } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts'
import { orderByCity } from './Types/orderByCityType';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',];

const CustomTooltip:FC<TooltipProps<number,string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];

      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
          <p>{`${payload[0].payload.city||''}: ${value}`}</p>
        </div>
      );
    }
    return null;
  };
  
const OrderCityChart = ({data}:{data:orderByCity[]}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart >
                <Pie
                    dataKey="count"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                >
                    {data.map((entry: orderByCity, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip   content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default OrderCityChart