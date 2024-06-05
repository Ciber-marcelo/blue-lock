import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center bg-color1 py-8 px-6 mt-16">
      <a href="https://github.com/Ciber-marcelo/blue-lock" target='blank' className="flex">
        <Image
          className='w-12 h-12 bg-color2 border-4 border-color2 rounded-s-md p-1'
          width={30}
          height={30}
          src='/images/M.svg'
          alt='Logo Marcelo'
        />
        <p className="h-12 flex items-center px-4 rounded-e-md border-4 border-l-0 bg-white border-color2 font-roboto font-bold text-color2">
          Desenvolvido por Marcelones
        </p>
      </a>
    </div>
  )
}