import Image from "next/image";

type statsProps = {
   image: any
   total: number
   speed: number
   defense: number
   pass: number
   dribble: number
   shoot: number
   offense: number

   totalScore?: string
   speedScore?: string
   defenseScore?: string
   passScore?: string
   dribbleScore?: string
   shootScore?: string
   offenseScore?: string
}

// export default function CharStats({image, speed, defense, pass, dribble, shoot, offense }: statsProps) {
export default function CharStats({ 
   image, 
   total, 
   speed, 
   defense, 
   pass, 
   dribble, 
   shoot, 
   offense,
   totalScore,
   speedScore, 
   defenseScore, 
   passScore, 
   dribbleScore, 
   shootScore, 
   offenseScore, 
}: statsProps) {

   return (
      <div className='flex'>
         <div className="flex items-center bg-color1 px-2 border-8 border-r-0 border-color2 rounded-l-md">
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
                  bg-white
                  p-2
                  font-roboto  
                  text-color2
                  text-7xl 
                  font-bold
                  rounded-md
               ">
                  {totalScore}
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
                  {speedScore}
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
                  {defenseScore}
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
                  {passScore}
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
                  {dribbleScore}
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
                  {shootScore}
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
                  {offenseScore}
               </div>
            </div>

            <span className="w-full font-roboto text-gray-500 text-[10px] leading-none">
               The total rating is not based on average, but rather as a Blue Lock player.
            </span>
         </div>
      </div>
   )
}