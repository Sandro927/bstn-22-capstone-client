import React from 'react';
import './PlayChart.scss';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

function PlayChart() {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const options = {
        plugins: {
          legend: {
            rtl : true,
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 16,
            }
          }
        }
    }

  return (
    <div className="playchart">
        <h1 className="playchart__header">Play Time</h1>
        <Doughnut data={data} options={options} className="playchart__doughnut"/>
    </div>
  )
}

export default PlayChart