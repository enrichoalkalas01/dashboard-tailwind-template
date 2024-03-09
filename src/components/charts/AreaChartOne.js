"use client"

import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic'

// const DynamicChart = dynamic(() => import('react-apexcharts'), { ssr: false })
export default function AreaChartOne({

}) {
    const [areaChartData, setAreaChartData] = useState(null)
    useEffect(() => {
        // Data grafik area
        const areaChartDataPassing = {
            options: {
                chart: {
                    id: 'area-chart',
                    toolbar: {
                        show: true,
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                fill: {
                    colors: ['#3182CE'], // Warna area
                    type: 'solid',
                    opacity: 0.25, // Opasitas area (0-1)
                },
                tooltip: {
                    enabled: true, // Aktifkan tooltip
                    intersect: false, // Tentukan apakah tooltip akan muncul hanya saat cursor bersinggungan dengan elemen grafik
                    followCursor: true, // Tentukan apakah tooltip akan mengikuti pergerakan cursor
                    custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                        // Custom logic untuk menampilkan detail tooltip
                        return '<div class="custom-tooltip">' + series[seriesIndex][dataPointIndex] + '</div>'
                    },
                },
            },
            series: [
                {
                    name: 'Series A',
                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 80, 60],
                },
                {
                    name: 'Series B',
                    data: [24, 11, 88, 53, 54, 60, 79, 34, 17, 33, 21, 60],
                },
            ],
        }

        setAreaChartData(areaChartDataPassing)
    }, [])

    useEffect(() => {

    }, [areaChartData])
    
    return(
        <>
            <div className='px-4'>
                <div className="bg-white p-4 pb-0 px-2 rounded-lg shadow-md">
                { areaChartData && (
                    <Chart
                        options={areaChartData?.options}
                        series={areaChartData?.series}
                        type="area"
                        height={350}
                    />
                )}
                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps() {
//     try {
//         // Lakukan logika server-side di sini
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();

//         // Kembalikan data sebagai properti ke halaman
//         return {
//             props: {
//             data,
//             error: null,
//             },
//         };
//     } catch (error) {
//         // Tangkap kesalahan dan kembalikan sebagai properti ke halaman
//         return {
//             props: {
//             data: null,
//             error: 'Terjadi kesalahan server-side',
//             },
//         };
//     }
// }
  