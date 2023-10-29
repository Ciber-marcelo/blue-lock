import dynamic from 'next/dynamic'
import Chart from 'react-apexcharts'
// const Chart = dynamic(() => import('react-apexcharts'))

export default function CharGraph() {
   const optionsGraph = {
      xaxis: {
         categories: ['SPEED', 'DEFENSE', 'PASS', 'DRIBBLE', 'SHOOT', 'OFFENSE'],
         labels: {
            show: true,
            offsetY: 5,
            style: {
               colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
               fontSize: "16px",
               fontFamily: 'Arial',
               fontWeight: 700
            }
         }
      },
      yaxis: {
         show: false, 
         tickAmount: 1,
         min: 0,
         max: 102,
      },
      fill: {
         opacity: 0.8,
         colors: ['#fff']
      },
      stroke: {
         show: true,
         width: 2,
         colors: ['#fff']
      },
      markers: {
         size: 0
      },
      colors: ['#001B3D'],
      dataLabels: {
         enabled: true,
         background: {
            enabled: true,
            borderRadius: 2,
            borderColor: '#fff',
            padding: 2,
         }
      },
      plotOptions: {
         radar: {
            polygons: {
               fill: {
                  colors: ['#0D4B98']
               }
            }
         }
      },
      chart: {
         toolbar: {
            show: false
         }
      }
   }

   const seriesGraph = [{
      name: "series-1",
      data: [70, 100, 85, 100, 79, 99]
   }]

   return (
      <div className="h-[450px] w-[500px] bg-blue-100">
         <Chart
            className='bg-red-500'
            options={optionsGraph}
            series={seriesGraph}
            type="radar"
            width="500"
         />
      </div>
   )
}