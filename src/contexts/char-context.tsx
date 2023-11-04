//da uma olhada no video para entender melhor o "react context"
//https://www.youtube.com/watch?v=06_575UN55A&t=231s
import { createContext, useState } from "react";

export type CharacterProps = {
   id: number
   image: any
   icon: any
   name: string
   stats: {
      total: number
      speed: number
      defense: number
      pass: number
      dribble: number
      shoot: number
      offense: number
   }
}

type CharContextProps = {
   char: CharacterProps | null
   selectedChar: (item: CharacterProps) => void
}

export const CharContext = createContext<CharContextProps>({} as CharContextProps);

export const CharProvider = ({ children }: { children: React.ReactNode }) => {
   const [char, setChar] = useState<CharacterProps | null>(null)

   function selectedChar(item: CharacterProps) {
      setChar(item)
   }

   return (
      <CharContext.Provider value={{char, selectedChar}}>
         {children}
      </CharContext.Provider>
   );
};
