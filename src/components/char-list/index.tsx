import { CharContext } from "@/contexts/char-context";
import { characterList } from "../../../public/jsons/characterList";
import CharItem from "./char-item";
import { useContext, useState } from "react";
import Search from "../search";

export default function CharList() {
   const [search, setSearch] = useState('')
   const { selectedChar } = useContext(CharContext);

   return (
      <div className="container pt-16">
         <Search onChange={(e: any) => setSearch(e.target.value.toUpperCase())}/>

         <div className="overflow-x-scroll scrollbar pt-8 pb-2">
            <div className="flex gap-4 h-[170px]">
               {characterList.map((item) => (
                  item.name.toUpperCase().includes(search.toUpperCase()) ?
                  <CharItem
                     onClick={() => selectedChar(item)}
                     key={item.id}
                     image={item.icon}
                     name={item.name}
                  />
                  :
                  null
               ))}
            </div>
         </div>
      </div>
   )
}