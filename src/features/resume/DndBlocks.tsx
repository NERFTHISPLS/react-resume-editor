import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import SortableItem from '../../ui/SortableItem';
import About from './About';
import Certificates from './Certificates';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import type { BlockType } from './types';

interface Props {
  setOpenedBlock: (block: BlockType) => void;
}

export default function DndBlocks({ setOpenedBlock }: Props) {
  const [blocks, setBlocks] = useState<BlockType[]>([
    'personalInfo',
    'experience',
    'education',
    'skills',
    'certificates',
    'about',
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setBlocks((items) => {
        const oldIndex = items.indexOf(active.id as BlockType);
        const newIndex = items.indexOf(over?.id as BlockType);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const blockComponents = {
    personalInfo: (
      <PersonalInfo onClick={() => setOpenedBlock('personalInfo')} />
    ),
    experience: <Experience onClick={() => setOpenedBlock('experience')} />,
    education: <Education onClick={() => setOpenedBlock('education')} />,
    skills: <Skills onClick={() => setOpenedBlock('skills')} />,
    certificates: (
      <Certificates onClick={() => setOpenedBlock('certificates')} />
    ),
    about: <About onClick={() => setOpenedBlock('about')} />,
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
        {blocks.map((block) => (
          <SortableItem key={block} id={block}>
            {blockComponents[block]}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
}
