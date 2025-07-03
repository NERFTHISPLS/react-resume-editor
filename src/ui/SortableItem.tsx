import { useDndContext } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function SortableItem({ id, children }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const { active } = useDndContext();

  const isDragging = active?.id === id;

  const style = {
    transform: CSS.Transform.toString(transform),
    cursor: isDragging ? 'grabbing' : 'grab',
    background: isDragging ? '#f0f0f0' : 'white',
    borderRadius: '10px',
    boxShadow: isDragging ? '0 2px 8px rgba(0,0,0,0.15)' : undefined,
    padding: '10px',
    marginBottom: '10px',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}
