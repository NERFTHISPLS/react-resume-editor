import { createSlice } from '@reduxjs/toolkit';
import type { Resume } from './types';

const initialState: Resume = {
  personalInfo: {
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Иванович',
    email: 'ivanov@example.com',
    phone: '+79991234567',
  },
  experience: [],
  education: [],
  skills: [],
  certificates: [],
  about: null,
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },

    setExperience: (state, action) => {
      state.experience = action.payload;
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
  setEducation,
  setSkills,
  setCertificates,
  setAbout,
} = resumeSlice.actions;

export default resumeSlice.reducer;
