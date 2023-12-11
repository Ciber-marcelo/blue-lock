'use client'

import { useState, useEffect } from 'react';
import { characterList } from "../../../public/jsons/characterList"
import { formations } from "../../../public/jsons/formations"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import { DroppableItem } from './droppable-item';
import { DraggableItem } from "./draggable-item";
import SearchCharItem from '../search';
import { Loading } from '../loading';
import { ButtonDnd } from './button-dnd';
import { Card } from './card';

export default function FormationMenu() {
   const [dropp, setDropp] = useState<any>(['', '', '', '', '', '', '', '', '', '', '']);
   const [dragg, setDragg] = useState<any>([])
   const [activeDrag, setActiveDrag] = useState(null);
   const [search, setSearch] = useState('')
   const [tactic, setTactic] = useState<any>([
      'bottom-[10px] left-[400px]',
      'bottom-[110px] left-[250px]',
      'bottom-[110px] left-[550px]',
      'bottom-[130px] left-[40px]',
      'bottom-[130px] left-[760px]',
      'bottom-[260px] left-[400px]',
      'bottom-[370px] left-[250px]',
      'bottom-[370px] left-[550px]',
      'bottom-[500px] left-[40px]',
      'bottom-[500px] left-[760px]',
      'bottom-[530px] left-[400px]',
   ])

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

   function handleTactic(n: number) {
      setTactic(formations[n].position)
   }

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
      <>
         <div className='container hidden min-[1100px]:flex flex-col gap-8 mt-16'>
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

               <div className='flex justify-between'>
                  <div className='overflow-y-auto overflow-x-hidden scrollbar flex flex-col pr-2 gap-2 h-[720px]'>
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

                  <div className='flex flex-col gap-2'>
                     <div className='flex gap-2'>
                        <ButtonDnd onClick={() => handleTactic(0)}>4-3-3</ButtonDnd>
                        <ButtonDnd onClick={() => handleTactic(1)}>4-4-2</ButtonDnd>
                        <ButtonDnd onClick={() => handleTactic(2)}>3-5-2</ButtonDnd>
                     </div>

                     <div className='relative flex justify-center items-center w-[900px] h-[660px] bg-fieldBg rounded-md'>
                        {tactic !== null
                           ?
                           dropp.map((item: any, i: number) => (
                              <DroppableItem id={i} key={i} className={`absolute ${tactic[i]}`}>
                                 {item !== '' &&
                                    <DraggableItem
                                       key={dragg[item - 1].id}
                                       id={dragg[item - 1].id}
                                       image={dragg[item - 1].image}
                                       name={dragg[item - 1].name}
                                    />
                                 }
                              </DroppableItem>
                           ))
                           :
                           <Loading />
                        }
                     </div>
                  </div>
               </div>
            </DndContext>
         </div>

         <Card />
      </>
   )
}