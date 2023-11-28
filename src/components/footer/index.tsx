import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-2 mt-16 py-8 bg-color1 font-roboto text-white font-bold">
      <Image 
        className="w-12 h-12 bg-white p-1 rounded-md"
        width={30}
        height={30}
        src="/images/M.svg"
        alt="Logo marcelones"
      />
      Developed by Marcelones
    </div>
  )
}