import React from "react";
import { Line } from "react-chartjs-2";




const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'black',
        borderColor: 'black',
        pointHoverBackgroundColor : 'white',
        pointHoverBorderColor : 'white',
        borderWidth : 7
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
