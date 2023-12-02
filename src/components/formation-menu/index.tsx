'use client'

import { useState, useEffect } from 'react';
import { characterList } from "../../../public/jsons/characterList"
import { DndContext } from "@dnd-kit/core"
import { DroppableItem } from './droppable-item';
import { DraggableItem } from "./draggable-item";

export default function FormationMenu() {
   const [dropp, setDropp] = useState<any>(['', '', '', '', '', '', '', '', '', '', '']);
   const [dragg, setDragg] = useState<any>([])

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
      // console.log(draggables)
   }, [])

   function handleDragEnd(event: any) {
      const { active, over } = event;
      const copyDropp = [...dropp];
      const copyDragg = [...dragg];

      if (over) {
         //seto o "dropp" selecionado como "vazio" (precisa setar como "vazio" antes de adicionar um dragg)
         copyDropp.map((item, i) => (
            active.id === item
               ?
               copyDropp.splice(i, 1, '')
               :
               null
         ));

         //seto um "dragg" no "dropp" selecionado
         copyDropp.splice(over.id, 1, active.id);

         //verifico se tem algum "dragg" no "dropp" selecionado e se tiver, seto o valor "off" no "dragg" em questão
         copyDragg.map((item) => (
            dropp[over.id] === item.id
               ?
               copyDragg.splice(item.id - 1, 1, {...item, selected: 'off'})
               :
               null
         ))

         //seto o valor "on" em um "dragg" que foi solto em um elemento "droppable"
         copyDragg.map((item) => (
            item.id === active.id
               ?
               copyDragg.splice(item.id - 1, 1,{...item, selected: 'on'})
               :
               null
         ));
      } else if (active) {
         //seto o "dropp" como "vazio" se o "dragg" selecionado estava nele
         copyDropp.map((item, i) => (
            item === active.id
               ?
               copyDropp.splice(i, 1, '')
               :
               null
         ));

         //seto o "dragg" selecionado como "off"
         copyDragg.map((item) => (
            item.id === active.id
               ?
               copyDragg.splice(item.id - 1, 1,{...item, selected: 'off'})
               :
               null
         ));
      }

      setDropp(copyDropp)
      setDragg(copyDragg)
      // console.log(dropp, dragg)
   }

   return (
      <div>
      <DndContext onDragEnd={handleDragEnd} id={'main'}>
         {dragg.map((item: any) => (
            item.selected === 'off'
               ?
               <DraggableItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
               />
               :
               null
         ))}

         <DroppableItem id={0}>
            {
               dropp[0] !== ''
                  ?
                  <DraggableItem
                     key={dragg[dropp[0] - 1].id}
                     id={dragg[dropp[0] - 1].id}
                     image={dragg[dropp[0] - 1].image}
                     name={dragg[dropp[0] - 1].name}
                  />
                  :
                  'drop here'
            }
         </DroppableItem>

         <DroppableItem id={1}>
            {
               dropp[1] !== ''
                  ?
                  <DraggableItem
                     key={dragg[dropp[1] - 1].id}
                     id={dragg[dropp[1] - 1].id}
                     image={dragg[dropp[1] - 1].image}
                     name={dragg[dropp[1] - 1].name}
                  />
                  :
                  'drop here'
            }
         </DroppableItem>
      </DndContext>
      </div>
   )
}