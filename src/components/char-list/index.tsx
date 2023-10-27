import { chars } from "../../../public/jsons/chars";
import CharItem from "../char-item";
import { useEffect } from "react";

type charObject = {
   id: number
   image: any
   name: string
}

//"onChar" serve para passar o "item" para outro componente, da uma olhada em "app/page.tsx"
export default function CharList({ onChar }: any) {

   useEffect(() => {
      chars.slice(0, 1).map((item) => (
         handleChar(item)
      ))
   }, [])

   function handleChar(item: charObject) {
      onChar(item)
   }

   return (
      <div className="container pt-16">
         <div className="overflow-x-auto pb-4 scrollbar">
            <div className="flex gap-4">
               {chars.slice(0, 8).map((item) => (
                  <CharItem
                     onClick={() => handleChar(item)}
                     key={item.id}
                     image={item.icon}
                     name={item.name}
                  />
               ))}
            </div>

            <div className="flex gap-4 pt-4">
               {chars.slice(-7).map((item) => (
                  <CharItem
                     onClick={() => handleChar(item)}
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