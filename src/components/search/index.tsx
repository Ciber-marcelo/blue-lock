import { FaSearch } from 'react-icons/fa'

type SearchProps = {
   onChange: any
}

export default function SearchCharItem({ onChange }: SearchProps) {
   return (
      <div className='flex items-center px-4 bg-color1  max-w-[400px] rounded-md'>
         <FaSearch size={20} color='white'/>
         <input
            onChange={onChange}
            maxLength={25}
            className="
            h-[50px] 
            w-full
            p-4 
            bg-color1
            text-white
            placeholder:text-white
             placeholder:font-normal
            focus:outline-none
            font-roboto 
            font-bold
         "
            placeholder="Search"
         />
      </div>
   )
}