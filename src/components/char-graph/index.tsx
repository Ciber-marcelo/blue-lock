import dynamic from 'next/dynamic'
import Chart from 'react-apexcharts'
// const Chart = dynamic(() => import('react-apexcharts'))

type statsProps = {
   speed: number
   defense: number
   pass: number
   dribble: number
   shoot: number
   offense: number
}


export default function CharGraph({ speed, defense, pass, dribble, shoot, offense }: statsProps) {
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
         max: 105,
      },
      fill: {
         opacity: 0.8,
         colors: ['#fff']
      },
      stroke: {
         show: true,
         width: 5,
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
         },
         style: {
            fontSize: '12px'
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
      data: [speed, defense, pass, dribble, shoot, offense]
   }]

   return (
      <div className=' w-[500px] h-[500px] bg-green-500'>
         <Chart
            className='bg-red-500'
            options={optionsGraph}
            series={seriesGraph}
            type="radar"
         // width="375"
         // height="375"
         />
      </div>
   )
}