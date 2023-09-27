import React from 'react';
// import { PieChart } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Statistics = () => {
    
      const data = [
        { name: 'Red', value: 12 },
       
        { name: 'Green', value: 5 },
        
      ];
    
     
      const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'];
    
      return (
        <div>
         
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
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
    
   

export default Statistics;