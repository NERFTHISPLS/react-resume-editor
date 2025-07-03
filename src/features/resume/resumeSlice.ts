import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { updateSliceArray } from '../../utils/helpers';
import type {
  About,
  Certificate,
  Education,
  Experience,
  PersonalInfo,
  ResumeSlice,
  Skill,
} from './types';

const initialState: ResumeSlice = {
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
      startDate: '01.01.2020',
      endDate: '01.01.2022',
      description: 'Описание опыта работы',
    },
  ],
  education: [
    {
      id: '1',
      institution: 'Московский государственный университет (с отличием)',
      specialization: 'Информатика и вычислительная техника',
      startDate: '01.09.2023',
      endDate: '01.06.2025',
    },
  ],
  skills: [],
  certificates: [],
  about: null,
  selectedExperienceId: null,
  selectedEducationId: null,
  selectedSkillId: null,
  selectedCertificateId: null,
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
    },

    setExperience: (state, action: PayloadAction<Experience>) => {
      state.experience = updateSliceArray(
        state.selectedExperienceId,
        state.experience,
        action,
      );
      state.selectedExperienceId = null;
    },

    setSelectedExperienceId: (state, action: PayloadAction<string | null>) => {
      state.selectedExperienceId = action.payload;
    },

    setEducation: (state, action: PayloadAction<Education>) => {
      state.education = updateSliceArray(
        state.selectedEducationId,
        state.education,
        action,
      );
      state.selectedEducationId = null;
    },

    setSelectedEducationId: (state, action: PayloadAction<string | null>) => {
      state.selectedEducationId = action.payload;
    },

    setSkills: (state, action: PayloadAction<Skill>) => {
      state.skills = updateSliceArray(
        state.selectedSkillId,
        state.skills,
        action,
      );
      state.selectedSkillId = null;
    },

    setSelectedSkillId: (state, action: PayloadAction<string | null>) => {
      state.selectedSkillId = action.payload;
    },

    setCertificates: (state, action: PayloadAction<Certificate>) => {
      state.certificates = updateSliceArray(
        state.selectedCertificateId,
        state.certificates,
        action,
      );
      state.selectedCertificateId = null;
    },

    setSelectedCertificateId: (state, action: PayloadAction<string | null>) => {
      state.selectedCertificateId = action.payload;
    },

    setAbout: (state, action: PayloadAction<About>) => {
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
  setSelectedCertificateId,
  setAbout,
} = resumeSlice.actions;

export default resumeSlice.reducer;
