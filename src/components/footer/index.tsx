import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-center mt-16 py-8 bg-color1">
      <div className="flex flex-col items-center gap-4 font-roboto text-white font-bold">
         <Image
            className="bg-white p-3 rounded-full"
            width={100}
            height={100}
            src={'/images/M.svg'}
            alt='Marcelones'
         />
         Desenvolvido por Marcelones
      </div>
      
    </div>
  )
}