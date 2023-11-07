import { CharContext } from "@/contexts/char-context";
import { characterList } from "../../../public/jsons/characterList";
import CharItem from "./char-item";
import { useEffect, useContext } from "react";

export default function CharList() {
   const {selectedChar } = useContext(CharContext);

   useEffect(() => {
      characterList.slice(0, 1).map((item) => (
         selectedChar(item)
      ))
   }, [])

   return (
      <div className="container pt-8">
         <div className="overflow-x-auto pb-4 scrollbar">
            <div className="flex gap-4">
               {characterList.slice(0, 11).map((item) => (
                  <CharItem
                     onClick={() => selectedChar(item)}
                     key={item.id}
                     image={item.icon}
                     name={item.name}
                  />
               ))}
            </div>

            <div className="flex gap-4 pt-4">
               {characterList.slice(11).map((item) => (
                  <CharItem
                     onClick={() => selectedChar(item)}
                     key={item.id}
                     image={item.icon}
                     name={item.name}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}