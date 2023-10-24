import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-center p-[30px] bg-color1">
      <Image
        width={180}
        height={40}
        src='/images/blue lock logo.svg'
        alt='logo'
      />
    </div>
  )
}