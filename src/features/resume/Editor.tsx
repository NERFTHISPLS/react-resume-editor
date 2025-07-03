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
import Modal from '../../ui/Modal';
import SortableItem from '../../ui/SortableItem';
import About from './About';
import AboutForm from './AboutForm';
import Certificates from './Certificates';
import CertificatesForm from './CertificatesForm';
import Education from './Education';
import EducationForm from './EducationForm';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';
import PersonalInfo from './PersonalInfo';
import PersonalInfoForm from './PersonalInfoForm';
import Skills from './Skills';
import SkillsForm from './SkillsForm';
import type { BlockType } from './types';

export default function Editor() {
  const [openedBlock, setOpenedBlock] = useState<BlockType | null>(null);

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
    <div className="flex-1 border-r border-gray-200 flex flex-col gap-4 p-4 overflow-y-auto">
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

      <Modal isOpen={openedBlock !== null} onClose={() => setOpenedBlock(null)}>
        {openedBlock === 'personalInfo' && (
          <PersonalInfoForm onCancel={() => setOpenedBlock(null)} />
        )}
        {openedBlock === 'experience' && (
          <ExperienceForm onCancel={() => setOpenedBlock(null)} />
        )}
        {openedBlock === 'education' && (
          <EducationForm onCancel={() => setOpenedBlock(null)} />
        )}
        {openedBlock === 'skills' && (
          <SkillsForm onCancel={() => setOpenedBlock(null)} />
        )}
        {openedBlock === 'certificates' && (
          <CertificatesForm onCancel={() => setOpenedBlock(null)} />
        )}
        {openedBlock === 'about' && (
          <AboutForm onCancel={() => setOpenedBlock(null)} />
        )}
      </Modal>
    </div>
  );
}
