type buttonProps = {
   children: any
   subText?: string
   onClick?: any
   color?: string
   disabled?: boolean
}

export function ButtonDnd({ children, subText, color, onClick, disabled }: buttonProps) {
   return (
      <button
         onClick={onClick}
         disabled={disabled ? true : false}
         className={`
            flex
            flex-col
            justify-center
            items-center
            ${color ? color : 'bg-color1'}
            rounded-md
            w-[85px]
            h-[52px]
            active:bg-[#C3D2E5]
            transition
            hover:opacity-80
            font-roboto 
             text-lg
            text-white 
            font-bold
         `}
      >
         <div>{disabled ?'...' : children}</div>
         <div className="text-xs">{disabled ?'' : subText}</div>
      </button>
   );
}