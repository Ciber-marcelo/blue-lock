import { useDroppable } from '@dnd-kit/core';
import yy from '../../../../public/images/drop item.png'

type dropItemProps = {
  id: number
  children: any
  className?: string
}

export function DroppableItem({ id, className, children }: dropItemProps) {
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
      //usei "overflow-hidden" pra tentar esconder um bug visual do dnd-kit
      className={`
        overflow-hidden  
        w-[100px] 
        h-[120px]
        rounded-md
        bg-dropBg
        ${className}
      `}>
      {children}
    </div>
  );
}