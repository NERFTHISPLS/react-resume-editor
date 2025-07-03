import Modal from '../../../ui/Modal';
import AboutForm from '../forms/AboutForm';
import CertificatesForm from '../forms/CertificatesForm';
import EducationForm from '../forms/EducationForm';
import ExperienceForm from '../forms/ExperienceForm';
import PersonalInfoForm from '../forms/PersonalInfoForm';
import SkillsForm from '../forms/SkillsForm';
import type { BlockType } from '../logic/types';

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
