import Image from "next/image";

type charItemProps = {
   image: any
   name: string
}

export default function CharItem({image, name}: charItemProps) {
   return (
     <div className="min-w-[160px] max-w-[160px] min-h-[200px] max-h-[200px] bg-color1 border-2 border-color2 rounded-md">
         <Image 
            width={160}
            height={160}
            src={image} 
            alt='Character image' 
         />
         <div className="h-10 bg-color2 flex justify-center items-center font-roboto text-sm text-white uppercase">  
            {name}
         </div>
     </div>
   )
 }