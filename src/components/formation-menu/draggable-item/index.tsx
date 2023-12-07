import Image from "next/image";
import { useDraggable } from '@dnd-kit/core';
import { UniqueIdentifier } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

type draggItemProps = {
   id: UniqueIdentifier
   image?: any
   name?: string
}

export function DraggableItem({id, image, name}: draggItemProps) {
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
         className={`
            min-w-[100px] 
            max-w-[100px] 
            min-h-[120px] 
            max-h-[120px] 
            bg-color1
            border-[5px]
            border-color2 
            rounded-md
         `}
      >
         <Image
            width={160}
            height={160}
            src={image}
            alt='Character image'
         />
         <div className="h-[23px] bg-color2 flex justify-center pt-[7px] font-roboto text-[8px] text-white font-bold uppercase">
            {name}
         </div>
      </div>
   );
}