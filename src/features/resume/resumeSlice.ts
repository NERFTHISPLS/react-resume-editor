import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Education, Experience, PersonalInfo, Resume } from './types';

const initialState: Resume = {
  personalInfo: {
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Иванович',
    email: 'ivanov@example.com',
    phone: '+79991234567',
  },
  experience: [
    {
      id: '1',
      position: 'Разработчик',
      company: 'ООО "Рога и копыта"',
      startDate: '2020-01-01',
      endDate: '2022-01-01',
      description: 'Описание опыта работы',
    },
  ],
  education: [
    {
      id: '1',
      institution: 'Московский государственный университет (с отличием)',
      specialization: 'Информатика и вычислительная техника',
      startDate: '2023-09-01',
      endDate: '2025-06-01',
    },
  ],
  skills: [],
  certificates: [],
  about: null,
  selectedExperienceId: null,
  selectedEducationId: null,
  selectedSkillId: null,
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
    },

    setExperience: (state, action: PayloadAction<Experience>) => {
      if (state.selectedExperienceId) {
        state.experience = state.experience.map((exp) =>
          exp.id === state.selectedExperienceId ? action.payload : exp,
        );
        state.selectedExperienceId = null;
      } else {
        state.experience.push(action.payload);
      }
    },

    setSelectedExperienceId: (state, action: PayloadAction<string | null>) => {
      state.selectedExperienceId = action.payload;
    },

    setEducation: (state, action: PayloadAction<Education>) => {
      if (state.selectedEducationId) {
        state.education = state.education.map((edu) =>
          edu.institution === state.selectedEducationId ? action.payload : edu,
        );
        state.selectedEducationId = null;
      } else {
        state.education.push(action.payload);
      }
    },

    setSelectedEducationId: (state, action: PayloadAction<string | null>) => {
      state.selectedEducationId = action.payload;
    },

    setSkills: (state, action) => {
      if (state.selectedSkillId) {
        state.skills = state.skills.map((skill) =>
          skill.id === state.selectedSkillId ? action.payload : skill,
        );
        state.selectedSkillId = null;
      } else {
        state.skills.push(action.payload);
      }
    },

    setSelectedSkillId: (state, action: PayloadAction<string | null>) => {
      state.selectedSkillId = action.payload;
    },

    setCertificates: (state, action) => {
      state.certificates = action.payload;
    },

    setAbout: (state, action) => {
      state.about = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setExperience,
  setSelectedExperienceId,
  setEducation,
  setSelectedEducationId,
  setSkills,
  setSelectedSkillId,
  setCertificates,
  setAbout,
} = resumeSlice.actions;

export default resumeSlice.reducer;
