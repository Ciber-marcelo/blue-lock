import { useContext } from "react";
import { CharContext } from "@/contexts/char-context";
import Image from "next/image";
import { formatScoreNumber } from "@/utils/formatScoreNumber";

export default function CharStats() {
   const { char } = useContext(CharContext);

   function Container({name, number} : any) {
      return (
         <div className="flex">
            <div className="w-full bg-color1 rounded-l-md p-2 font-roboto text-white font-bold">
               {name}
            </div>
            <div className="flex w-[70px] justify-center items-center bg-color1 mx-1 font-roboto text-white font-bold">
               {number}
            </div>
            <div className="flex w-[70px] justify-center items-center bg-white rounded-r-md font-roboto text-2xl text-color2 font-bold">
               {formatScoreNumber(number)}
            </div>
         </div>
      )
   }

   return (
      <div className='flex w-full select-none'>
         <div className="flex w-full justify-center items-center bg-color1 px-1 border-8 border-r-0 border-color2 rounded-l-md">
            <Image
               width={250}
               height={400}
               src={char.image}
               alt='character image'
               draggable={false}
               priority={true} //evita um erro no console
            />
         </div>

         <div className="flex w-[200px] flex-col gap-2 bg-color2 p-2 rounded-r-md">
            <div className="flex justify-between bg-color1 p-2 rounded-md">
               <div className="flex flex-col justify-between items-center">
                  <span className="font-roboto font-white text-white text-2xl font-bold">
                     TOTAL
                  </span>
                  <span className="font-roboto font-white text-white text-5xl font-bold">
                     {char.stats.total}
                  </span>
               </div>
               <div className="flex justify-center items-center w-[70px] bg-white font-roboto text-color2 text-7xl font-bold rounded-md">
                  {formatScoreNumber(char.stats.total)}
               </div>
            </div>

            <Container name={'SPEED'} number={char.stats.speed} />
            <Container name={'DEFENSE'} number={char.stats.defense} />
            <Container name={'PASS'} number={char.stats.pass} />
            <Container name={'DRIBBLE'} number={char.stats.dribble} />
            <Container name={'SHOOT'} number={char.stats.shoot} />
            <Container name={'OFFENSE'} number={char.stats.offense} />

            <span className="w-full font-roboto text-gray-400 text-[10px] leading-none">
               The total rating is not based on average, but rather as a Blue Lock player.
            </span>
         </div>
      </div>
   )
}