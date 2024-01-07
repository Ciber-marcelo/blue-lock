import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-2 mt-16 py-8 bg-color1 font-roboto text-white font-bold">
      <Link href={'https://github.com/Ciber-marcelo/blue-lock'} target="blank">
        <Image
          className="w-12 h-12 bg-white p-1 rounded-md"
          width={30}
          height={30}
          src="/images/M.svg"
          alt="Logo marcelones"
          draggable={false}
        />
      </Link>
      Developed by Marcelones

    </div>
  )
}