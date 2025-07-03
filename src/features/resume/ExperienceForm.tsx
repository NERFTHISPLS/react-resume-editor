import { format } from 'date-fns';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from '../../store';
import BlockForm from '../../ui/BlockForm';
import FormRow from '../../ui/FormRow';
import { DATE_FORMAT } from '../../utils/constants';
import { setExperience, setSelectedExperienceId } from './resumeSlice';
import type { Experience } from './types';

interface Props {
  onCancel: () => void;
}

export default function ExperienceForm({ onCancel }: Props) {
  const selectedExperienceId = useSelector(
    (state: RootState) => state.resume.selectedExperienceId,
  );

  const targetExperience = useSelector((state: RootState) =>
    state.resume.experience.find((exp) => exp.id === selectedExperienceId),
  );

  const [form, setForm] = useState<Experience>(
    targetExperience ?? {
      id: uuidv4(),
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  );

  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      setExperience({
        ...form,
        startDate: format(form.startDate, DATE_FORMAT),
        endDate: format(form.endDate, DATE_FORMAT),
      }),
    );
    dispatch(setSelectedExperienceId(null));
    onCancel();
  };

  return (
    <BlockForm title="Опыт работы" onCancel={onCancel} onSubmit={handleSubmit}>
      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="position"
        value={form.position}
        onChange={handleChange}
      >
        Должность
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="company"
        value={form.company}
        onChange={handleChange}
      >
        Компания
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="date"
        htmlFor="startDate"
        value={form.startDate}
        onChange={handleChange}
      >
        Дата начала
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="date"
        htmlFor="endDate"
        value={form.endDate}
        onChange={handleChange}
      >
        Дата окончания
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="textarea"
        htmlFor="description"
        value={form.description}
        onChange={handleChange}
      >
        Описание
      </FormRow>
    </BlockForm>
  );
}
