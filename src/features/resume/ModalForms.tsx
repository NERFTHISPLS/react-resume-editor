import Modal from '../../ui/Modal';
import AboutForm from './AboutForm';
import CertificatesForm from './CertificatesForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import PersonalInfoForm from './PersonalInfoForm';
import SkillsForm from './SkillsForm';
import type { BlockType } from './types';

interface Props {
  openedBlock: BlockType | null;
  setOpenedBlock: (block: BlockType | null) => void;
}

export default function ModalForms({ openedBlock, setOpenedBlock }: Props) {
  return (
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
  );
}
