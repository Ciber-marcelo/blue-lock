import Image from "next/image";
import { formatScoreNumber } from "@/utils/formatScoreNumber";

type statsProps = {
   image: any
   total: number
   speed: number
   defense: number
   pass: number
   dribble: number
   shoot: number
   offense: number
}

export default function CharStats({ image, total, speed, defense, pass, dribble, shoot, offense }: statsProps) {

   return (
      <div className='flex w-full'>
         <div className="flex w-full justify-center items-center bg-color1 px-1 border-8 border-r-0 border-color2 rounded-l-md">
            <Image
               width={250}
               height={400}
               src={image}
               alt='character image'
            />
         </div>
         <div className="flex w-[200px] flex-col gap-2 bg-color2 p-2 rounded-r-md">
            <div className="flex justify-between bg-color1 p-2 rounded-md">
               <div className="flex flex-col justify-between items-center">
                  <span className="font-roboto font-white text-white text-2xl font-bold">
                     TOTAL
                  </span>
                  <span className="font-roboto font-white text-white text-5xl font-bold">
                     {total}
                  </span>
               </div>
               <div className="
                  flex
                  justify-center
                  items-center
                  w-[70px]
                  bg-white
                  font-roboto  
                  text-color2
                  text-7xl 
                  font-bold
                  rounded-md
               ">
                  {formatScoreNumber(total)}
               </div>
            </div>

            <div className="flex">
               <div className="w-full bg-color1 rounded-l-md p-2 font-roboto text-white font-bold">
                  SPEED
               </div>
               <div className="flex w-[70px] justify-center items-center bg-color1 mx-1 font-roboto text-white font-bold">
                  {speed}
               </div>
               <div className="flex w-[70px] justify-center items-center bg-white rounded-r-md font-roboto text-2xl text-color2 font-bold">
                  {formatScoreNumber(speed)}
               </div>
            </div>

            <div className="flex">
               <div className="w-full bg-color1 rounded-l-md p-2 font-roboto text-white font-bold">
                  DEFENSE
               </div>
               <div className="flex w-[70px] justify-center items-center bg-color1 mx-1 font-roboto text-white font-bold">
                  {defense}
               </div>
               <div className="flex w-[70px] justify-center items-center bg-white rounded-r-md font-roboto text-2xl text-color2 font-bold">
                  {formatScoreNumber(defense)}
               </div>
            </div>

            <div className="flex">
               <div className="w-full bg-color1 rounded-l-md p-2 font-roboto text-white font-bold">
                  PASS
               </div>
               <div className="flex w-[70px] justify-center items-center bg-color1 mx-1 font-roboto text-white font-bold">
                  {pass}
               </div>
               <div className="flex w-[70px] justify-center items-center bg-white rounded-r-md font-roboto text-2xl text-color2 font-bold">
                  {formatScoreNumber(pass)}
               </div>
            </div>

            <div className="flex">
               <div className="w-full bg-color1 rounded-l-md p-2 font-roboto text-white font-bold">
                  DRIBBLE
               </div>
               <div className="flex w-[70px] justify-center items-center bg-color1 mx-1 font-roboto text-white font-bold">
                  {dribble}
               </div>
               <div className="flex w-[70px] justify-center items-center bg-white rounded-r-md font-roboto text-2xl text-color2 font-bold">
                  {formatScoreNumber(dribble)}
               </div>
            </div>

            <div className="flex">
               <div className="w-full bg-color1 rounded-l-md p-2 font-roboto text-white font-bold">
                  SHOOT
               </div>
               <div className="flex w-[70px] justify-center items-center bg-color1 mx-1 font-roboto text-white font-bold">
                  {shoot}
               </div>
               <div className="flex w-[70px] justify-center items-center bg-white rounded-r-md font-roboto text-2xl text-color2 font-bold">
                  {formatScoreNumber(shoot)}
               </div>
            </div>

            <div className="flex">
               <div className="w-full bg-color1 rounded-l-md p-2 font-roboto text-white font-bold">
                  OFFENSE
               </div>
               <div className="flex w-[70px] justify-center items-center bg-color1 mx-1 font-roboto text-white font-bold">
                  {offense}
               </div>
               <div className="flex w-[70px] justify-center items-center bg-white rounded-r-md font-roboto text-2xl text-color2 font-bold">
                  {formatScoreNumber(offense)}
               </div>
            </div>

            <span className="w-full font-roboto text-gray-400 text-[10px] leading-none">
               The total rating is not based on average, but rather as a Blue Lock player.
            </span>
         </div>
      </div>
   )
}