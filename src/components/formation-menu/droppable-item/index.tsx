import { useDroppable } from '@dnd-kit/core';

export function DroppableItem({id, children}: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    opacity: isOver ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className='
        w-[140px] 
        h-[170px]
        rounded-md
        bg-gray-400
      '>
      {children}
    </div>
  );
}