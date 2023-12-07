'use client'

import { useState, useEffect } from 'react';
import { characterList } from "../../../public/jsons/characterList"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import { DroppableItem } from './droppable-item';
import { DraggableItem } from "./draggable-item";
import SearchCharItem from '../search';

export default function FormationMenu() {
   const [dropp, setDropp] = useState<any>(['', '', '', '', '', '', '', '', '', '', '']);
   const [dragg, setDragg] = useState<any>([])
   const [search, setSearch] = useState('')
   const [activeDrag, setActiveDrag] = useState(null);

   useEffect(() => {
      const draggables = (
         characterList.map((item) => (
            {
               id: item.id,
               image: item.icon,
               name: item.name,
               selected: 'off'
            }
         ))
      );
      setDragg(draggables)
   }, [])

   function handleDragStart(event: any) {
      setActiveDrag(event.active.id);
   }

   function handleDragEnd(event: any) {
      setActiveDrag(null);
      const { active, over } = event;
      const copyDropp = [...dropp];
      const copyDragg = [...dragg];

      if (over) {
         //seto o "dropp" selecionado como "vazio" (precisa setar como "vazio" antes de adicionar um dragg)
         copyDropp.map((item, i) => (
            active.id === item &&
            copyDropp.splice(i, 1, '')
         ));

         //seto um "dragg" no "dropp" selecionado
         copyDropp.splice(over.id, 1, active.id);

         //verifico se tem algum "dragg" no "dropp" selecionado e se tiver, seto o valor "off" no "dragg" em questão
         copyDragg.map((item) => (
            dropp[over.id] === item.id &&
            copyDragg.splice(item.id - 1, 1, { ...item, selected: 'off' })
         ))

         //seto o valor "on" em um "dragg" que foi solto em um elemento "droppable"
         copyDragg.map((item) => (
            item.id === active.id &&
            copyDragg.splice(item.id - 1, 1, { ...item, selected: 'on' })
         ));

      } else if (active) {
         //seto o "dropp" como "vazio" se o "dragg" selecionado estava nele
         copyDropp.map((item, i) => (
            item === active.id &&
            copyDropp.splice(i, 1, '')
         ));

         //seto o "dragg" selecionado como "off"
         copyDragg.map((item) => (
            item.id === active.id &&
            copyDragg.splice(item.id - 1, 1, { ...item, selected: 'off' })
         ));
      }

      setDropp(copyDropp)
      setDragg(copyDragg)
   }

   return (
      <div className='container flex flex-col gap-8 mt-16'>
         <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} id={'main'} autoScroll={false}>

            {/* estou utilizando "DragOverlay" para resovler um bug que ocorre com os "DraggableItens" que estão dentro de um "scroll" */}
            <DragOverlay dropAnimation={null}>
               {activeDrag &&
                  <DraggableItem
                     id={activeDrag}
                     image={dragg[activeDrag - 1].image}
                     name={dragg[activeDrag - 1].name}
                  />
               }
            </DragOverlay>

            <SearchCharItem onChange={(e: any) => setSearch(e.target.value.toUpperCase())} />

            <div className='flex justify-between overflow-hidden'>
               <div className='overflow-y-auto overflow-x-hidden flex flex-col pr-2 gap-2 h-[760px]'>
                  {dragg.map((item: any) => (
                     item.selected === 'off' && item.name.toUpperCase().includes(search.toUpperCase()) ?
                        item.id === activeDrag
                           ?
                           <div key={activeDrag} className='min-w-[100px] min-h-[120px]'></div>
                           :
                           <DraggableItem
                              key={item.id}
                              id={item.id}
                              image={item.image}
                              name={item.name}
                           />
                        :
                        null
                  ))}
               </div>

               <div className='bg-red-500'>
                  <div className='relative w-[900px] h-[700px] bg-green-500 rounded-md border-[5px] border-color2'>
                     <DroppableItem id={0} className='absolute bottom-[20px] left-[400px]'>
                        {dropp[0] !== '' &&
                           <DraggableItem
                              key={dragg[dropp[0] - 1].id}
                              id={dragg[dropp[0] - 1].id}
                              image={dragg[dropp[0] - 1].image}
                              name={dragg[dropp[0] - 1].name}
                           />
                        }
                     </DroppableItem>

                     <DroppableItem id={1}>
                        {dropp[1] !== '' &&
                              <DraggableItem
                                 key={dragg[dropp[1] - 1].id}
                                 id={dragg[dropp[1] - 1].id}
                                 image={dragg[dropp[1] - 1].image}
                                 name={dragg[dropp[1] - 1].name}
                              />
                        }
                     </DroppableItem>
                  </div>
               </div>
            </div>
         </DndContext>
      </div>
   )
}