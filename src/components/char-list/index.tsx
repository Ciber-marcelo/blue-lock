import { CharContext } from "@/contexts/char-context";
import { characterList } from "../../../public/jsons/characterList";
import CharItem from "./char-item";
import { useContext } from "react";

export default function CharList() {
   const { selectedChar } = useContext(CharContext);

   return (
      <div className="container pt-16">
         <div className="overflow-x-auto pb-4 scrollbar">
            <div className="flex gap-4">
               {characterList.map((item) => (
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