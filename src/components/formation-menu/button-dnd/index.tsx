type buttonProps = {
   children: any
   onClick?: any
   disabled?: boolean
}

export function ButtonDnd({ children, onClick, disabled }: buttonProps) {
   return (
      <button
         onClick={onClick}
         disabled={disabled ? true : false}
         className={`
            flex
            justify-center
            items-center
            bg-color1
            rounded-md
            w-[85px]
            h-[52px]
            active:bg-[#C3D2E5]
            transition
            font-roboto 
            text-[20px] 
            text-white 
            font-bold
         `}
      >
         {disabled
            ?
            '...'
            :
            children
         }
      </button>
   );
}