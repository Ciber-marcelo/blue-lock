'use client'

import React, { useState, useEffect } from 'react';
import { DndContext, DragOverlay } from "@dnd-kit/core"
import { characterList } from "../../../public/jsons/characterList"
import { DroppableItem } from './droppable-item';
import { DraggableItem } from "./draggable-item";
import Search from '../search';
import { Loading } from '../loading';
import { ButtonDnd } from './button-dnd';
import { Card } from './card';
import { DisabledItem } from './disabled-item';
import html2canvas from 'html2canvas';
import { IoMdDownload, IoMdClose } from "react-icons/io";

export default function FormationMenu() {
   const [dropp, setDropp] = useState<any>([]);
   const [dragg, setDragg] = useState<any>([]);
   const [activeDrag, setActiveDrag] = useState(null);
   const [search, setSearch] = useState('');
   const [tactic, setTactic] = useState<any>(null);
   const [buttonActive, setButtonActive] = useState('')
   const [disabledButton, setDisabledButton] = useState(false)
   const printRef = React.useRef<any>(null);

   useEffect(() => {
      clear()
      handleTactic('4-4-2')
   }, [])

   function clear() {
      const draggables = (
         characterList.map((item, i) => (
            {
               id: i + 1,
               image: item.icon,
               name: item.name,
               rating: item.stats.total,
               selected: 'off'
            }
         ))
      );
      setDragg(draggables)
      setDropp(['', '', '', '', '', '', '', '', '', '', ''])
      setButtonActive('4-4-2')
   }

   function handleTactic(f: string) {
      if (f === '4-4-2') {
         setTactic([
            'bottom-[10px] left-[400px]',
            'bottom-[110px] left-[250px]',
            'bottom-[110px] left-[550px]',
            'bottom-[130px] left-[40px]',
            'bottom-[130px] left-[760px]',
            'bottom-[220px] left-[400px]',
            'bottom-[380px] left-[400px]',
            'bottom-[400px] left-[700px]',
            'bottom-[400px] left-[100px]',
            'bottom-[530px] left-[550px]',
            'bottom-[530px] left-[250px]',
         ])
         setButtonActive('4-4-2')
      } else if (f === '4-3-3') {
         setTactic([
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
         setButtonActive('4-3-3')
      } else if (f === '3-4-3') {
         setTactic([
            'bottom-[10px] left-[400px]',
            'bottom-[150px] left-[400px]',
            'bottom-[150px] left-[600px]',
            'bottom-[150px] left-[200px]',
            'bottom-[290px] left-[520px]',
            'bottom-[290px] left-[280px]',
            'bottom-[320px] left-[80px]',
            'bottom-[320px] left-[720px]',
            'bottom-[470px] left-[220px]',
            'bottom-[470px] left-[580px]',
            'bottom-[530px] left-[400px]',
         ])
         setButtonActive('3-4-3')
      } else if (f === '3-5-1-1') {
         setTactic([
            'bottom-[10px] left-[400px]',
            'bottom-[140px] left-[400px]',
            'bottom-[140px] left-[600px]',
            'bottom-[140px] left-[200px]',
            'bottom-[300px] left-[560px]',
            'bottom-[270px] left-[400px]',
            'bottom-[300px] left-[240px]',
            'bottom-[330px] left-[720px]',
            'bottom-[330px] left-[80px]',          
            'bottom-[400px] left-[400px]',
            'bottom-[530px] left-[400px]',
         ])
         setButtonActive('3-5-1-1')
      } else if (f === '3-4-1-2') {
         setTactic([
            'bottom-[10px] left-[400px]',
            'bottom-[150px] left-[400px]',
            'bottom-[150px] left-[600px]',
            'bottom-[150px] left-[200px]',
            'bottom-[290px] left-[550px]',
            'bottom-[290px] left-[250px]',
            'bottom-[410px] left-[400px]',
            'bottom-[330px] left-[740px]',
            'bottom-[330px] left-[60px]',
            'bottom-[530px] left-[550px]',
            'bottom-[530px] left-[250px]',
         ])
         setButtonActive('3-4-1-2')
      }
   }

   //para entender melhor a lib "html2cavas" da uma olhada nesse site: "https://www.robinwieruch.de/react-component-to-image/"
   async function handleDownloadImage() {
      setDisabledButton(true)
      const element = printRef.current;
      element.classList.remove('rounded-l-md') //removendo o border-radius para não ter na imagem baixada
      const canvas = await html2canvas(element);

      const data = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
         link.href = data;
         link.download = 'formation.jpg';

         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
      } else {
         window.open(data);
      }

      setDisabledButton(false)
   };

   function handleDragStart(event: any) {
      setActiveDrag(event.active.id);
      const copyDropp = [...dropp];

      //seto o "dropp" como "vazio" quando retiro o "dragg" dentro dele(presisa fazer isso para corrigir um bug visual)
      copyDropp.map((item, i) => (
         item === event.active.id &&
         copyDropp.splice(i, 1, '')
      ));
      setDropp(copyDropp)
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
         <div className='container hidden min-[1190px]:flex flex-col gap-8 mt-16'>
            <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} id={'main'} autoScroll={false}>

               {/* estou utilizando "DragOverlay" para resovler um bug que ocorre com os "DraggableItens" que estão dentro de um "scroll" */}
               <DragOverlay dropAnimation={null}>
                  {activeDrag &&
                     <DraggableItem
                        id={activeDrag}
                        image={dragg[activeDrag - 1].image}
                        name={dragg[activeDrag - 1].name}
                        rating={dragg[activeDrag - 1].rating}
                     />
                  }
               </DragOverlay>

               <Search onChange={(e: any) => setSearch(e.target.value.toUpperCase())} />

               <div className='flex justify-between'>
                  <div className='overflow-y-auto overflow-x-hidden scrollbar flex flex-col pr-2 gap-2 h-[660px]'>
                     {dragg.map((item: any) => (
                        item.selected === 'off' && item.name.toUpperCase().includes(search.toUpperCase())
                           ?
                           item.id === activeDrag
                              ?
                              <DisabledItem key={item.id} image={item.image} name={item.name} rating={item.rating} />
                              :
                              <DraggableItem key={item.id} id={item.id} image={item.image} name={item.name} rating={item.rating} />
                           :
                           item.name.toUpperCase().includes(search.toUpperCase())
                              ?
                              <DisabledItem key={item.id} image={item.image} name={item.name} rating={item.rating} />
                              :
                              null
                     ))}
                  </div>

                  <div className='flex'>
                     <div ref={printRef} className='relative flex justify-center items-center w-[900px] h-[660px] bg-fieldBg rounded-l-md select-none'>
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
                                       rating={dragg[item - 1].rating}
                                    />
                                 }
                              </DroppableItem>
                           ))
                           :
                           <Loading />
                        }
                     </div>

                     <div className='flex flex-col justify-between bg-color2 rounded-r-md py-[5px] pr-[5px]'>
                        <div className='flex flex-col gap-[5px]'>
                           <ButtonDnd onClick={() => handleTactic('4-4-2')} css={(buttonActive === '4-4-2' && 'bg-color2 border-color1 border-2')} subText='Bastard'>4-4-2</ButtonDnd>
                           <ButtonDnd onClick={() => handleTactic('4-3-3')} css={(buttonActive === '4-3-3' && 'bg-color2 border-color1 border-2')} subText='Barcha'>4-3-3</ButtonDnd>
                           <ButtonDnd onClick={() => handleTactic('3-4-3')} css={(buttonActive === '3-4-3' && 'bg-color2 border-color1 border-2')} subText='Manshine'>3-4-3</ButtonDnd>
                           <ButtonDnd onClick={() => handleTactic('3-5-1-1')} css={(buttonActive === '3-5-1-1' && 'bg-color2 border-color1 border-2')} subText='Ubers'>3-5-1-1</ButtonDnd>
                           <ButtonDnd onClick={() => handleTactic('3-4-1-2')} css={(buttonActive === '3-4-1-2' && 'bg-color2 border-color1 border-2')} subText='PXG'>3-4-1-2</ButtonDnd>
                        </div>

                        <div className='flex flex-col gap-[5px]'>
                           <ButtonDnd onClick={() => clear()} css='bg-red-500'>
                              <IoMdClose color='white' size={40} />
                           </ButtonDnd>
                           <ButtonDnd onClick={handleDownloadImage} css='bg-green-500' disabled={disabledButton}>
                              <IoMdDownload color='white' size={40} />
                           </ButtonDnd>
                        </div>
                     </div>
                  </div>
               </div>
            </DndContext>
         </div>

         <Card />
      </>
   )
}