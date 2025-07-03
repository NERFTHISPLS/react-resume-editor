import { format } from 'date-fns';
import { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from '../../../store';
import type { FormChangeEvent } from '../../../types';
import BlockForm from '../../../ui/BlockForm';
import FormRow from '../../../ui/FormRow';
import { DATE_FORMAT } from '../../../utils/constants';
import { setEducation, setSelectedEducationId } from '../logic/resumeSlice';
import type { Education } from '../logic/types';

interface Props {
  onCancel: () => void;
}

export default function EducationForm({ onCancel }: Props) {
  const selectedEducationId = useSelector(
    (state: RootState) => state.resume.selectedEducationId,
  );

  const targetEducation = useSelector((state: RootState) =>
    state.resume.education.find((edu) => edu.id === selectedEducationId),
  );

  const [form, setForm] = useState<Education>(
    targetEducation ?? {
      id: uuidv4(),
      institution: '',
      specialization: '',
      startDate: '',
      endDate: '',
    },
  );

  const dispatch = useDispatch();

  const handleChange = (e: FormChangeEvent) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setEducation(form));
    dispatch(setSelectedEducationId(null));
    onCancel();
  };

  return (
    <BlockForm title="Образование" onCancel={onCancel} onSubmit={handleSubmit}>
      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="institution"
        value={form.institution}
        onChange={handleChange}
      >
        Учебное заведение
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="specialization"
        value={form.specialization}
        onChange={handleChange}
      >
        Специальность
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="date"
        htmlFor="startDate"
        value={form.startDate ? format(form.startDate, DATE_FORMAT) : ''}
        onChange={handleChange}
      >
        Дата начала
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="date"
        htmlFor="endDate"
        value={form.endDate ? format(form.endDate, DATE_FORMAT) : ''}
        onChange={handleChange}
      >
        Дата окончания
      </FormRow>
    </BlockForm>
  );
}
