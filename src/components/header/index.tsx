'use client'

import Image from "next/image";
import Link from "next/link";
import { BiFootball } from "react-icons/bi";
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  {
    label: 'Characters',
    href: '/',
  },
  {
    label: 'Formations',
    href: '/create-formation',
  },
]

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-color1">
      <div className="container flex justify-between p-8">

        <Image
          className="hidden sm:flex"
          width={180}
          height={40}
          src='/images/blue lock logo.svg'
          alt='logo'
          
        />

        <Image
          className="sm:hidden"
          width={42}
          height={40}
          src='/images/blue lock logo 2.svg'
          alt='logo'
        />

        <nav className='flex items-center gap-4 sm:gap-10 font-roboto font-bold uppercase'>
          {NAV_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-1 ${pathname === item.href ? 'text-gray-50' : 'text-gray-400'}`}
            >
              <BiFootball size={25} />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}