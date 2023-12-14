import Image from "next/image";
import { formatName } from "@/utils/formatName";

type disabledProps = {
   image: any
   name: string
   rating: number
}

export function DisabledItem({ image, name, rating }: disabledProps) {
   return (
      <div className="
            min-w-[100px] 
            max-w-[100px] 
            min-h-[120px] 
            max-h-[120px] 
            bg-color1
            border-[5px]
            border-color2 
            rounded-md
            relative
            opacity-40
            select-none
      ">
         <div className="
            absolute 
            left-[0px]
            top-[-2px]
            pr-[4px]
            rounded-br
            bg-color2
            font-roboto  
            text-white 
            font-bold
            select-none
         ">
            {rating}
         </div>
         <Image
            width={160}
            height={160}
            src={image}
            alt='Character image'
            draggable={false}
         />
         <div className="h-[23px] bg-color2 flex justify-center pt-[5px] font-roboto text-xs text-white font-bold uppercase select-none">
            {formatName(name)}
         </div>
      </div>
   );
}