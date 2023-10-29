import Image from "next/image";
import { Loading } from "../loading";
import CharGraph from "../char-graph";

export default function CharInfo({ show }: any) {

   return (
      <div className="container pt-16">
         <div className="h-[480px] bg-gradient-to-r from-color1 to-color2 rounded-md">
            {show.image ?
               <div className="flex justify-between items-center px-2">
                  <Image
                     width={300}
                     height={480}
                     src={show.image}
                     alt=''
                  />
                  <CharGraph />
                  {/* <div className="h-[450px] w-[300px] bg-cyan-500"></div> */}
               </div>
               :
               <Loading />
            }
         </div>
      </div>
   )
}