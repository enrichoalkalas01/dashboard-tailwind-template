"use client"
import { useEffect } from "react"
import Chart from 'react-apexcharts';

export default function LineChartOne() {
    const areaChartData = {
        options: {
          chart: {
            id: 'area-chart',
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        },
        series: [
          {
            name: 'Series A',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 80, 60],
          },
        ],
    };

    return(
        <>
           <div className="bg-white p-8 rounded-lg shadow-md">
            <Chart options={areaChartData.options} series={areaChartData.series} type="area" height={350} />
        </div>
        </>
    )
}