import CharGraph from "./char-graph";
import CharStats from "./char-stats";

export default function CharInfo() {
   return (
      <div className="container mt-8">
         <div className="flex flex-col gap-4 lg:flex-row">
            <CharStats />
            <CharGraph />
         </div>
      </div>
   )
}