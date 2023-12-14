import { useContext } from "react";
import { CharContext } from "@/contexts/char-context";

import Image from "next/image";

type charItemProps = {
   image: any
   name: string
   onClick: any
}

export default function CharItem({ image, name, onClick }: charItemProps) {
   const { char } = useContext(CharContext);
   
   return (
      <button 
         onClick={onClick}
         className={`
            min-w-[140px] 
            max-w-[140px] 
            min-h-[170px] 
            max-h-[170px] 
            bg-color1
            ${ char.name === name ? 'bg-color3' : 'bg-opacity-100'}
            hover:bg-[#C3D2E5]
            border-[5px]
            border-color2 
            rounded-md
            transition
            select-none
         `}
      >
         <Image
            width={160}
            height={160}
            src={image}
            alt='Character image'
            draggable={false}
         />
         <div className="h-[30px] bg-color2 flex justify-center pt-[10px] font-roboto text-xs text-white font-bold uppercase">
            {name}
         </div>
      </button>
   )
}