import Image from "next/image";
import { Loading } from "../loading";

export default function CharGraph({ show }: any) {

   return (
      <div className="container pt-16">
         <div className="h-[480px] bg-gradient-to-r from-color1 to-color2 rounded-md">
            {show.image ?
               <div className="flex justify-between items-center">
                  <Image
                     width={300}
                     height={480}
                     src={show.image}
                     alt=''
                  />
                  <div className="h-[450px] w-[300px] bg-purple-500"></div>
                  <div className="h-[450px] w-[300px] bg-cyan-500"></div>
               </div>
               :
               <Loading />
            }
         </div>
      </div>
   )
}