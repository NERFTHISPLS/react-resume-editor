export interface PersonalInfo {
  name: string;
  surname: string;
  patronymic: string;
  age: number;
  email: string;
  phone: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  specialization: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Certificate {
  id: string;
  name: string;
  date: string;
  description: string;
}

export interface About {
  description: string;
}

export interface ResumeSlice {
  personalInfo: PersonalInfo | null;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certificates: Certificate[];
  about: About | null;
  selectedExperienceId: string | null;
  selectedEducationId: string | null;
  selectedSkillId: string | null;
  selectedCertificateId: string | null;
}

export type BlockType =
  | 'personalInfo'
  | 'experience'
  | 'education'
  | 'skills'
  | 'certificates'
  | 'about';
