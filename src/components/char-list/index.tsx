import { CharContext } from "@/contexts/char-context";
import { characterList } from "../../../public/jsons/characterList";
import CharItem from "./char-item";
import { useContext, useState } from "react";
import Search from "../search";

export default function CharList() {
   const {selectedChar} = useContext(CharContext);
   const [charsFilter, setCharsFilter] = useState<object[]>(characterList)

   function filter(search: string) {
      const fil: object[] = []

      characterList.map((item) => (
         item.name.toUpperCase().includes(search.toUpperCase()) && fil.push(item)
      ))

      setCharsFilter(fil)
   }

   return (
      <div className="container pt-16">
         <Search onChange={(e: any) => filter(e.target.value.toUpperCase())} />

         <div className="overflow-x-scroll scrollbar pt-8 pb-2">
            <div className="flex gap-4 h-[170px]">
               {charsFilter.length !== 0 ?
                  charsFilter.map((item: any) => (
                     <CharItem
                        onClick={() => selectedChar(item)}
                        key={item.id}
                        image={item.icon}
                        name={item.name}
                     />
                  ))
                  :
                  <div className="flex w-full justify-center items-center font-roboto text-2xl text-color2 font-bold">
                     NO FOUND
                  </div>
               }
            </div>
         </div>
      </div>
   )
}