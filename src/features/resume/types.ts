export interface PersonalInfo {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  phone: string;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  institution: string;
  specialization: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Certificate {
  name: string;
  date: string;
  description: string;
}

export interface About {
  description: string;
}

export interface Resume {
  personalInfo: PersonalInfo | null;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certificates: Certificate[];
  about: About | null;
}

export type BlockType =
  | 'personalInfo'
  | 'experience'
  | 'education'
  | 'skills'
  | 'certificates'
  | 'about';
