'use client'

import Image from "next/image";
import Link from "next/link";
import { BiFootball } from "react-icons/bi";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    label: 'Characters',
    href: '/',
  },
  {
    label: 'Formation',
    href: '/create-formation',
  },
]

export default function Header() {
  const pathname = usePathname();
  const [screen, setScreen] = useState<number>(700)

  //o evento 'resize' chama uma função sempre que a tela muda de tamanho
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen(window.innerWidth)
      // console.log(screen, window.innerWidth)
    });

    setScreen(window.innerWidth)
  }, [])

  return (
    <div className="bg-color1">
      <div className="container flex justify-between p-8">
        <Link href={NAV_ITEMS[0].href}>
          <Image
            className="h-[40px]"
            width={screen > 640 ? 180 : 42}
            height={40}
            src={screen > 640 ? '/images/blue lock logo.svg' : '/images/blue lock logo 2.svg'}
            alt='logo'
            draggable={false}
          />
        </Link>

        <nav className='flex h-[40px] items-center gap-4 font-roboto font-bold uppercase'>
          {NAV_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-1 ${pathname === item.href ? 'text-gray-50' : 'text-gray-400'}`}
            >
              <BiFootball size={25} />
              {screen > 440 ? item.label : item.label.slice(0, 4)}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}