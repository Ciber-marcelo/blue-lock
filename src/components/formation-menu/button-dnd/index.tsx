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
            border-color2
            border-[5px]
            rounded-md
            px-[7px]
            py-[4px]
            w-fit
            active:bg-color2
            transition
            font-roboto 
            text-[24px] 
            text-white 
            font-bold
         "
      >
         {children}
      </button>
   );
}