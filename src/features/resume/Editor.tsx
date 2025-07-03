import { useState } from 'react';
import Modal from '../../ui/Modal';
import About from './About';
import AboutForm from './AboutForm';
import Certificates from './Certificates';
import CertificatesForm from './CertificatesForm';
import Education from './Education';
import EducationForm from './EducationForm';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';
import PersonalInfoBlock from './PersonalInfoBlock';
import PersonalInfoForm from './PersonalInfoForm';
import Skills from './Skills';
import SkillsForm from './SkillsForm';
import type { BlockType } from './types';

export default function Editor() {
  const [openedBlock, setOpenedBlock] = useState<BlockType | null>(null);

  const handleCloseForm = () => {
    setOpenedBlock(null);
  };

  return (
    <div className="flex-1 border-r border-gray-200 flex flex-col gap-4 p-4 overflow-y-auto">
      <PersonalInfoBlock onClick={() => setOpenedBlock('personalInfo')} />
      <Experience onClick={() => setOpenedBlock('experience')} />
      <Education onClick={() => setOpenedBlock('education')} />
      <Skills onClick={() => setOpenedBlock('skills')} />
      <Certificates onClick={() => setOpenedBlock('certificates')} />
      <About onClick={() => setOpenedBlock('about')} />

      <Modal isOpen={!!openedBlock} onClose={handleCloseForm}>
        {openedBlock === 'personalInfo' && (
          <PersonalInfoForm onCancel={handleCloseForm} />
        )}

        {openedBlock === 'experience' && (
          <ExperienceForm onCancel={handleCloseForm} />
        )}

        {openedBlock === 'education' && (
          <EducationForm onCancel={handleCloseForm} />
        )}

        {openedBlock === 'skills' && <SkillsForm onCancel={handleCloseForm} />}

        {openedBlock === 'certificates' && (
          <CertificatesForm onCancel={handleCloseForm} />
        )}

        {openedBlock === 'about' && <AboutForm onCancel={handleCloseForm} />}
      </Modal>
    </div>
  );
}
