import React from 'react';
import { PieChart } from 'recharts';

const Statistics = () => {
    const pieChartData = [
        {
          label: 'Total Donation',
          value: totalDonation,
          color: '#FF6384', },
        {
          label: 'My Donation',
          value: myDonation,
          color: '#36A2EB', 
        },
      ];
    return (
        <div>
           <PieChart width={700} height={500} data={pieChartData}>

           </PieChart>
        
        </div>
    );
};

export default Statistics;