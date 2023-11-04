'use client'

import CharInfo from "@/components/char-info";
import CharList from "@/components/char-list";
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
