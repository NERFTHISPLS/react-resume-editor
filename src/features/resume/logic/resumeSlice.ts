import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { deleteFromArray, updateSliceArray } from '../../../utils/helpers';
import type {
  About,
  BlockType,
  Certificate,
  Education,
  Experience,
  PersonalInfo,
  ResumeSlice,
  Skill,
} from './types';

const DEFAULT_BLOCK_ORDER: BlockType[] = [
  'personalInfo',
  'experience',
  'education',
  'skills',
  'certificates',
  'about',
];

const initialState: ResumeSlice = {
  personalInfo: null,
  experience: [],
  education: [],
  skills: [],
  certificates: [],
  about: null,
  selectedExperienceId: null,
  selectedEducationId: null,
  selectedSkillId: null,
  selectedCertificateId: null,
  blockOrder: DEFAULT_BLOCK_ORDER,
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo | null>) => {
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

    deleteExperience: (state, action: PayloadAction<string>) => {
      state.experience = deleteFromArray(action.payload, state.experience);
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

    deleteEducation: (state, action: PayloadAction<string>) => {
      state.education = deleteFromArray(action.payload, state.education);
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

    deleteSkill: (state, action: PayloadAction<string>) => {
      state.skills = deleteFromArray(action.payload, state.skills);
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

    deleteCertificate: (state, action: PayloadAction<string>) => {
      state.certificates = deleteFromArray(action.payload, state.certificates);
    },

    setSelectedCertificateId: (state, action: PayloadAction<string | null>) => {
      state.selectedCertificateId = action.payload;
    },

    setAbout: (state, action: PayloadAction<About | null>) => {
      state.about = action.payload;
    },

    setBlockOrder: (state, action: PayloadAction<BlockType[]>) => {
      state.blockOrder = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setExperience,
  deleteExperience,
  setSelectedExperienceId,
  setEducation,
  deleteEducation,
  setSelectedEducationId,
  setSkills,
  deleteSkill,
  setSelectedSkillId,
  setCertificates,
  deleteCertificate,
  setSelectedCertificateId,
  setAbout,
  setBlockOrder,
} = resumeSlice.actions;

export default resumeSlice.reducer;
