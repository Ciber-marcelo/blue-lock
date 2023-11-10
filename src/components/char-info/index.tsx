import { useContext } from "react";
import { CharContext } from "@/contexts/char-context";
import { Loading } from "../loading";
import CharGraph from "./char-graph";
import CharStats from "./char-stats";

export default function CharInfo() {
   const { char } = useContext(CharContext);

   return (
      <div className="container mt-8">
         {char.image ?
            <div className="flex flex-col gap-4 lg:flex-row">
               <CharStats
                  image={char.image}
                  total={char.stats.total}
                  speed={char.stats.speed}
                  defense={char.stats.defense}
                  pass={char.stats.pass}
                  dribble={char.stats.dribble}
                  shoot={char.stats.shoot}
                  offense={char.stats.offense}
               />
               <CharGraph
                  name={char.name}
                  speed={char.stats.speed}
                  defense={char.stats.defense}
                  pass={char.stats.pass}
                  dribble={char.stats.dribble}
                  shoot={char.stats.shoot}
                  offense={char.stats.offense}
               />
            </div>
            :
            <div className="flex justify-center items-center min-h-[430px]">
               <Loading />
            </div>
         }
      </div>
   )
}