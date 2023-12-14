import Image from "next/image";
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { formatName } from "@/utils/formatName";

type draggItemProps = {
   id: number
   image: any
   name: string
   rating: number
}

export function DraggableItem({id, image, name, rating}: draggItemProps) {
   const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: id
   });

   const style = {
      transform: CSS.Translate.toString(transform),
   };

   return (
      <div
         ref={setNodeRef}
         style={style}
         {...listeners}
         {...attributes}
         className="
            min-w-[100px] 
            max-w-[100px] 
            min-h-[120px] 
            max-h-[120px] 
            bg-color1
            border-[5px]
            border-color2 
            rounded-md
            relative
            select-none
         "
      >  
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
         ">
         {rating}
         </div>
         <Image
            width={160}
            height={160}
            src={image}
            alt='Character image'
         />
         <div className="h-[23px] bg-color2 flex justify-center pt-[5px] font-roboto text-xs text-white font-bold uppercase">
             {formatName(name)}
         </div>
      </div>
   );
}