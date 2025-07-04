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
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import SortableItem from '../../../ui/SortableItem';
import About from '../components/About';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Experience from '../components/Experience';
import PersonalInfo from '../components/PersonalInfo';
import Skills from '../components/Skills';
import { setBlockOrder } from '../logic/resumeSlice';
import type { BlockType } from '../logic/types';

interface Props {
  setOpenedBlock: (block: BlockType) => void;
}

export default function DndBlocks({ setOpenedBlock }: Props) {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.resume.blockOrder);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = blocks.indexOf(active.id as BlockType);
      const newIndex = blocks.indexOf(over?.id as BlockType);
      const newOrder = arrayMove(blocks, oldIndex, newIndex);
      dispatch(setBlockOrder(newOrder));
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
