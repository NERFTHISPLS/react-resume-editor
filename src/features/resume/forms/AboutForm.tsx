import { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import type { FormChangeEvent } from '../../../types';
import BlockForm from '../../../ui/BlockForm';
import FormRow from '../../../ui/FormRow';
import { setAbout } from '../logic/resumeSlice';
import type { About } from '../logic/types';

interface Props {
  onCancel: () => void;
}

export default function AboutForm({ onCancel }: Props) {
  const { description } =
    useSelector((state: RootState) => state.resume.about) ?? {};

  const dispatch = useDispatch();

  const [form, setForm] = useState<About>({
    description: description ?? '',
  });

  const handleChange = (e: FormChangeEvent) => {
    setForm({ ...form, description: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setAbout(form.description ? form : null));
    onCancel();
  };

  return (
    <BlockForm title="О себе" onCancel={onCancel} onSubmit={handleSubmit}>
      <FormRow
        inputType="textarea"
        htmlFor="description"
        value={form.description}
        onChange={handleChange}
      ></FormRow>
    </BlockForm>
  );
}
