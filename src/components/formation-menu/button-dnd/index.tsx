type buttonProps = {
   children: any
   onClick?: any
}

export function ButtonDnd({children, onClick}: buttonProps) {
   return (
      <button 
         onClick={onClick}
         className="
            flex
            justify-center
            items-center
            bg-color1
            rounded-md
            w-[85px]
            h-[52px]
            active:bg-[#C3D2E5]
            hover:bg-color3
            transition
            font-roboto 
            text-[20px] 
            text-white 
            font-bold
         "
      >
         {children}
      </button>
   );
}