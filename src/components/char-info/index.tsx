import { Loading } from "../loading";
import CharGraph from "./char-graph";
import CharStats from "./char-stats";

export default function CharInfo({ show }: any) {
   return (
      <div className="container mt-8">
         {/* <div className="min-h-[432px] bg-gradient-to-r from-color1 to-color2 rounded-md"> */}
         {show.image ?
            <div className="flex flex-col gap-4 lg:flex-row">
               <CharStats
                  image={show.image}
                  total={show.stats.total}
                  speed={show.stats.speed}
                  defense={show.stats.defense}
                  pass={show.stats.pass}
                  dribble={show.stats.dribble}
                  shoot={show.stats.shoot}
                  offense={show.stats.offense}
               />
               <CharGraph
                  name={show.name}
                  speed={show.stats.speed}
                  defense={show.stats.defense}
                  pass={show.stats.pass}
                  dribble={show.stats.dribble}
                  shoot={show.stats.shoot}
                  offense={show.stats.offense}
               />
            </div>
            :
            <div className="flex justify-center items-center min-h-[430px]">
               <Loading />
            </div>
         }
         {/* </div> */}
      </div>
   )
}