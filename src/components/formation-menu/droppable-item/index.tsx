import { useDroppable } from '@dnd-kit/core';

export function DroppableItem({id, children}: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style} className='border-[5px] border-color2 w-[200px] h-[200px]'>
      {children}
    </div>
  );
}