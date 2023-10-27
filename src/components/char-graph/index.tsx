import Image from "next/image";
import { Loading } from "../loading";

export default function CharGraph({ show }: any) {

   return (
      <div className="container pt-16">
         <div className="flex justify-center items-center bg-green-500">
            <div className="w-[300px] h-[480px] bg-red-500">
               {show.image ?
                  <Image
                     width={300}
                     height={480}
                     src={show.image}
                     alt=''
                  />
                  :
                  <Loading />
               }
            </div>

            <div className="h-[450px] w-[300px] bg-purple-500">
            </div>

            <div className="h-[450px] w-[300px] bg-cyan-500">
            </div>
         </div>
      </div>
   )
}