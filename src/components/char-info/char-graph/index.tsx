// estou usando o "dynamic" para importar e resolver um problema da biblioteca "react-apexcharts"
import { Loading } from '@/components/loading';
import dynamic from 'next/dynamic'
import { useContext } from "react";
import { CharContext } from "@/contexts/char-context";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type statsProps = {
   name: string
   speed: number
   defense: number
   pass: number
   dribble: number
   shoot: number
   offense: number
}

export default function CharGraph({ name, speed, defense, pass, dribble, shoot, offense }: statsProps) {
   const { char } = useContext(CharContext);
   
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
         width: 3,
         colors: ['#fff']
      },
      markers: {
         size: 0
      },
      colors: ['#0D4B98'],
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
                  colors: ['#001B3D']
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
      <div className='flex flex-col w-full h-auto sm:min-h-[430px] justify-between items-center bg-color1 border-8 border-color2 rounded-md select-none'>
         <div className='flex h-[30px] justify-center w-full bg-color2 font-roboto text-white font-bold uppercase'>
            {name} Graph
         </div>
         {char.name ?
            <Chart
               className='w-full pl-4 pt-6'
               options={optionsGraph}
               series={seriesGraph}
               type="radar"
               width={'100%'}
               height={'auto'}
            />
            :
            <Loading />
         }

         <div className='flex w-full pl-1 font-roboto text-gray-400 text-[10px]'>
            The informations was taken from the Blue Lock manga (up to ch.233).
         </div>
      </div>
   )
}