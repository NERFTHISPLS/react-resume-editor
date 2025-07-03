import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AboutPreview from './AboutPreview';
import CertificatesPreview from './CertificatesPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import PersonalInfoPreview from './PersonalInfoPreview';
import SkillsPreview from './SkillsPreview';

export default function Preview() {
  const { personalInfo, experience, education, skills, certificates, about } =
    useSelector((state: RootState) => state.resume);

  return (
    <div className="flex-1 flex flex-col gap-6 p-8 overflow-y-auto bg-gradient-to-br from-blue-50 to-white min-h-screen rounded-2xl shadow-2xl border-2 border-blue-200">
      <h1 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
        Резюме
      </h1>

      {personalInfo && <PersonalInfoPreview personalInfo={personalInfo} />}
      {about && <AboutPreview about={about} />}
      <ExperiencePreview experience={experience} />
      <EducationPreview education={education} />
      <SkillsPreview skills={skills} />
      <CertificatesPreview certificates={certificates} />
    </div>
  );
}
