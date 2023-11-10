type SearchProps = {
   onChange: any
}

export default function SearchCharItem({onChange}: SearchProps) {
   return (
      <input
         onChange={onChange}
         className="
            h-[36px] 
            w-full
            max-w-[300px]
            px-2 
            bg-color1 
            rounded-md
            focus:outline-none
            text-white
            placeholder:text-gray-400
            font-roboto 
            font-bold
            text-xs
         "
         placeholder="Search"
      />
   )
}