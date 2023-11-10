'use client'

import CharInfo from "@/components/Char-info";
import CharList from "@/components/Char-list";
import { CharProvider } from "@/contexts/char-context";

export default function Home() {
  return (
    <div >
      <CharProvider>
        <CharList />
        <CharInfo />
      </CharProvider>
    </div>
  )
}
