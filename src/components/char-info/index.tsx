import Image from "next/image";
import { Loading } from "../loading";
import CharGraph from "../char-graph";

export default function CharInfo({ show }: any) {

   return (
      <div className="container pt-8">
         <div className="min-h-[432px] bg-gradient-to-r from-color1 to-color2 rounded-md">
            {show.image ?
               <div className="flex flex-wrap justify-center gap-8 items-center p-4">
                  <Image
                     width={250}
                     height={400}
                     src={show.image}
                     alt=''
                  />
                  <CharGraph 
                     speed={show.stats.speed}
                     defense={show.stats.defense}
                     pass={show.stats.pass}
                     dribble={show.stats.dribble}
                     shoot={show.stats.shoot}
                     offense={show.stats.offense}
                  />
               </div>
               :
               <Loading />
            }
         </div>
      </div>
   )
}