import Image from "next/image";

type charItemProps = {
   image: any
   name: string
   onClick: any
}

export default function CharItem({ image, name, onClick }: charItemProps) {
   return (
      <button 
         onClick={onClick}
         className="
            min-w-[120px] 
            max-w-[120px] 
            min-h-[150px] 
            max-h-[150px] 
            bg-color1 
             border-2 
            border-color2 
            rounded-md
            hover:bg-color2
            group
            transition
         "
      >
         <Image
            className=" rounded-t-[4px]"
            width={160}
            height={160}
            src={image}
            alt='Character image'
         />
         <div className="h-[30px] bg-color2 flex justify-center items-center font-roboto text-xs text-white font-bold uppercase">
            {name}
         </div>
      </button>
   )
}