import React from 'react';
import ChartApex from 'react-apexcharts';

export default function Chart({ amount=0, color="#fff" }) {

    var options = {
        chart: {
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: -180,
                endAngle: 180,
                track: {
                  background: '#151515',
                  startAngle: -180,
                  endAngle: 180,
                  strokeWidth: '17%',
                },
                hollow: {
                    margin: 125,
                    size: '65%'
                },
                dataLabels: {
                    showOn: 'always',
                    value: {
                        offsetY: -10,
                        color: '#a8a8a8',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    },
                },
            }
        },
        fill: {
            colors: [`${color}`],
          },
        stroke: {
            lineCap: "round",
          },
        series: [amount],
        labels: [''],
      }
    
  return (
    <div>
      <ChartApex type="radialBar" options={options} series={options.series} height="140" width="100" />
    </div>
  );
}
