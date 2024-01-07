import Link from "next/link"

export function Card() {
   return (
      <div
         className='
            flex
            flex-col
            items-center 
            min-[1190px]:hidden 
            bg-color1 
            rounded
            py-4
            px-8
            mx-4
            my-80
            text-white
            font-roboto
            font-bold 
            uppercase
            gap-8
         '
      >
         <p>The formations page is not supported on mobile devices or on screens smaller than 1200px.</p>
         <Link href={'/'}>
            <p className=" hover:text-color3 transition-all">Back to Characters page</p>
         </Link>
      </div>
   );
}