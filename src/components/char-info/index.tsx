import { Loading } from "../loading";
import CharGraph from "./char-graph";
import CharStats from "./char-stats";

export default function CharInfo({ show }: any) {
   return (
      <div className="container pt-8">
         <div className="min-h-[432px] bg-gradient-to-r from-color1 to-color2 rounded-md">
            {show.image ?
               <div className="flex flex-wrap justify-center gap-8 items-center p-4">
                  <CharStats
                     image={show.image}
                     total={show.stats.total}
                     speed={show.stats.speed}
                     defense={show.stats.defense}
                     pass={show.stats.pass}
                     dribble={show.stats.dribble}
                     shoot={show.stats.shoot}
                     offense={show.stats.offense}
                     totalScore="A"
                     speedScore="A"
                     defenseScore="S"
                     passScore="B"
                     dribbleScore="B"
                     shootScore="A"
                     offenseScore="S"
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