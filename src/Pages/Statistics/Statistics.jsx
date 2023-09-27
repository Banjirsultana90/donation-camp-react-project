
import React from 'react';
import { PieChart, Pie, Cell, Legend, Label } from 'recharts'; 
import { getstoreddonation } from '../../Utility/localstorage';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
  const donatedItems = getstoreddonation(); 
  const totalItems = useLoaderData(); 
  const data = [
    { donation: 'Total Items', value: totalItems.length },
    { donation: 'Donated Items', value: donatedItems.length },
  ];

  const colors = ['#FF6384', '#9B59B6'];

  return (
    <div className=' flex items-center justify-center'>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="donation"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          labelLine={false} 
          label={renderCustomizedLabel} 
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

export default Statistics;

