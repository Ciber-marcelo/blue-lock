import { chars } from "../../../public/jsons/chars";
import CharItem from "../char-item";

export default function CharList() {
   return (
      <div className="container pt-16">
         <div className="overflow-x-auto pb-4">
            <div className="flex gap-4">
               {chars.slice(0, 8).map((item) => (
                  <CharItem
                     key={item.id}
                     image={item.icon}
                     name={item.name}
                  />
               ))}
            </div>

            <div className="flex gap-4 pt-4">
               {chars.slice(-7).map((item) => (
                  <CharItem
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