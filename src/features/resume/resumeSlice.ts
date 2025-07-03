import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Experience, PersonalInfo, Resume } from './types';

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
  education: [],
  skills: [],
  certificates: [],
  about: null,
  selectedExperienceId: null,
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

    setEducation: (state, action) => {
      state.education = action.payload;
    },

    setSkills: (state, action) => {
      state.skills = action.payload;
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
  setSkills,
  setCertificates,
  setAbout,
} = resumeSlice.actions;

export default resumeSlice.reducer;
