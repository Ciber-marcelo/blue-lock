'use client'

import CharInfo from "@/components/char-info";
import CharList from "@/components/char-list";
import { useState } from "react";


export default function Home() {
  const [char, setChar] = useState({})

  function handleSaveChar(item: any) {
    setChar(item)
  }

  return (
    <div >
      <CharList onChar={handleSaveChar} />
      <CharInfo show={char} />
    </div>
  )
}
