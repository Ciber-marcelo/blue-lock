type buttonProps = {
   children: any
   subText?: string
   onClick?: any
   css?: string | boolean
   disabled?: boolean
}

export function ButtonDnd({ children, subText, css, onClick, disabled }: buttonProps) {
   return (
      <button
         onClick={onClick}
         disabled={disabled ? true : false}
         className={`
            flex
            flex-col
            justify-center
            items-center
            rounded-md
            bg-color1
            w-[85px]
            h-[52px]
            transition
            hover:opacity-80
            font-roboto 
            text-lg
            text-white 
            font-bold
            ${css && css}
         `}
      >
         <div>{disabled ?'...' : children}</div>
         <div className="text-xs">{disabled ?'' : subText}</div>
      </button>
   );
}