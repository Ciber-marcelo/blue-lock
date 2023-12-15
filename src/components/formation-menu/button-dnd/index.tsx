type buttonProps = {
   children: string
   onClick: any
}

export function ButtonDnd({children, onClick}: buttonProps) {
   return (
      <button 
         onClick={onClick} 
         className="
            bg-color1
            rounded-md
            px-[7px]
            py-[4px]
            w-[85px]
            h-[52px]
            active:bg-color3
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