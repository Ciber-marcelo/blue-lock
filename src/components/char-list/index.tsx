import { CharContext } from "@/contexts/char-context";
import { characterList } from "../../../public/jsons/characterList";
import CharItem from "../char-item";
import { useContext, useState } from "react";
import SearchCharItem from "../search";

export default function CharList() {
   const [search, setSearch] = useState('')
   const { selectedChar } = useContext(CharContext);

   return (
      <div className="container pt-16">
         <SearchCharItem onChange={(e: any) => setSearch(e.target.value.toUpperCase())}/>

         <div className="overflow-x-auto pt-8 pb-2 scrollbar">
            <div className="flex gap-4">
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