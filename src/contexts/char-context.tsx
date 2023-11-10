//da uma olhada no video para entender melhor o "react context", link: https://www.youtube.com/watch?v=06_575UN55A&t=231s
import { createContext, useState } from "react";
import isagi from '../../public/images/chars/isagi.svg'
import isagiIcon  from '../../public/images/chars-icons/isagi.svg'

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
   char: CharacterProps
   selectedChar: (item: CharacterProps) => void
}

export const CharContext = createContext<CharContextProps>({} as CharContextProps);

export const CharProvider = ({ children }: { children: React.ReactNode }) => {
   const [char, setChar] = useState<CharacterProps>({
      id: 1,
      image: isagi,
      icon: isagiIcon ,
      name: 'Isagi Yoichi',
      stats: {
         total:88,
         speed: 77,
         defense: 75,
         pass: 78,
         dribble: 70,
         shoot: 82,
         offense: 94
      }
   } as CharacterProps)

   function selectedChar(item: CharacterProps) {
      setChar(item)
   }

   return (
      <CharContext.Provider value={{char, selectedChar}}>
         {children}
      </CharContext.Provider>
   );
};
