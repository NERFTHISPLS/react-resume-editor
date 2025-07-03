import { type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import type { BlockType, ResumeSlice } from '../logic/types';
import AboutPreview from './AboutPreview';
import CertificatesPreview from './CertificatesPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import PersonalInfoPreview from './PersonalInfoPreview';
import SkillsPreview from './SkillsPreview';

type PreviewData = Pick<
  ResumeSlice,
  | 'personalInfo'
  | 'about'
  | 'experience'
  | 'education'
  | 'skills'
  | 'certificates'
>;

type BlockToComponentMap = {
  [K in BlockType]: (data: PreviewData) => ReactElement | null;
};

const blockToComponent: BlockToComponentMap = {
  personalInfo: (data) =>
    data.personalInfo ? (
      <PersonalInfoPreview personalInfo={data.personalInfo} />
    ) : null,
  about: (data) => (data.about ? <AboutPreview about={data.about} /> : null),
  experience: (data) => <ExperiencePreview experience={data.experience} />,
  education: (data) => <EducationPreview education={data.education} />,
  skills: (data) => <SkillsPreview skills={data.skills} />,
  certificates: (data) => (
    <CertificatesPreview certificates={data.certificates} />
  ),
};

export default function Preview() {
  const {
    personalInfo,
    experience,
    education,
    skills,
    certificates,
    about,
    blockOrder,
  } = useSelector((state: RootState) => state.resume);

  const data: PreviewData = {
    personalInfo,
    experience,
    education,
    skills,
    certificates,
    about,
  };

  return (
    <div className="flex-1 flex flex-col gap-6 p-8 overflow-y-auto bg-gradient-to-br from-blue-50 to-white min-h-screen rounded-2xl shadow-2xl border-2 border-blue-200">
      <h1 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
        Резюме
      </h1>
      {blockOrder.map(
        (block: BlockType) =>
          blockToComponent[block](data) && (
            <div key={block}>{blockToComponent[block](data)}</div>
          ),
      )}
    </div>
  );
}
