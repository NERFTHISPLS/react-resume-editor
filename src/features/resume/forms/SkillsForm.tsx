import { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from '../../../store';
import type { FormChangeEvent } from '../../../types';
import BlockForm from '../../../ui/BlockForm';
import FormRow from '../../../ui/FormRow';
import { setSelectedSkillId, setSkills } from '../logic/resumeSlice';
import type { Skill } from '../logic/types';

interface Props {
  onCancel: () => void;
}

export default function SkillsForm({ onCancel }: Props) {
  const selectedSkillId = useSelector(
    (state: RootState) => state.resume.selectedSkillId,
  );

  const targetSkill = useSelector((state: RootState) =>
    state.resume.skills.find((skill) => skill.id === selectedSkillId),
  );

  const [form, setForm] = useState<Skill>(
    targetSkill ?? {
      id: uuidv4(),
      name: '',
    },
  );

  const dispatch = useDispatch();

  const handleChange = (e: FormChangeEvent) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setSkills(form));
    dispatch(setSelectedSkillId(null));
    onCancel();
  };

  return (
    <BlockForm title="Навыки" onCancel={onCancel} onSubmit={handleSubmit}>
      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="name"
        value={form.name}
        onChange={handleChange}
      >
        Навык
      </FormRow>
    </BlockForm>
  );
}
