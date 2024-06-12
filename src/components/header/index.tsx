'use client'

import Image from "next/image";
import Link from "next/link";
import { BiFootball } from "react-icons/bi";
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Characters', href: '/' },
  { label: 'Formations', href: '/create-formation' },
]

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-color1">
      <div className="container flex justify-between p-8">
        <Link href={NAV_ITEMS[0].href}>
          <Image
            className="hidden sm:flex h-[40px]"
            width={180}
            height={40}
            src='/images/blue lock logo.svg'
            alt='logo'
            draggable={false}
            priority={true} //evita um erro no console
          />

          <Image
            className="sm:hidden h-[40px]"
            width={42}
            height={40}
            src='/images/blue lock logo 2.svg'
            alt='logo'
            draggable={false}
            priority={true} //evita um erro no console
          />
        </Link>

        <nav className='flex h-[40px] items-center gap-4 font-roboto font-bold uppercase'>
          {NAV_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-1 transition-all ${pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
            >
              <BiFootball size={25} />
              <div className="hidden sm:flex">{item.label}</div>
              <div className="sm:hidden">{item.label.slice(0, 4) + 'S'}</div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}