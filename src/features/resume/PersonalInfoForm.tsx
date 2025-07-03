import { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import type { FormChangeEvent } from '../../types';
import BlockForm from '../../ui/BlockForm';
import FormRow from '../../ui/FormRow';
import { setPersonalInfo } from './resumeSlice';
import type { PersonalInfo } from './types';

interface Props {
  onCancel: () => void;
}

export default function PersonalInfoForm({ onCancel }: Props) {
  const { name, surname, patronymic, age, email, phone } =
    useSelector((state: RootState) => state.resume.personalInfo) ?? {};

  const [form, setForm] = useState<PersonalInfo>({
    name: name ?? '',
    surname: surname ?? '',
    patronymic: patronymic ?? '',
    age: age ?? 0,
    email: email ?? '',
    phone: phone ?? '',
  });

  const dispatch = useDispatch();

  const handleChange = (e: FormChangeEvent) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setPersonalInfo({ ...form, age: Number(form.age) }));
    onCancel();
  };

  return (
    <BlockForm
      title="Личные данные"
      onCancel={onCancel}
      onSubmit={handleSubmit}
    >
      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="name"
        value={form.name}
        onChange={handleChange}
      >
        Имя
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="surname"
        value={form.surname}
        onChange={handleChange}
      >
        Фамилия
      </FormRow>

      <FormRow
        inputType="text"
        htmlFor="patronymic"
        value={form.patronymic}
        onChange={handleChange}
      >
        Отчество (при наличии)
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="number"
        htmlFor="age"
        value={form.age.toString()}
        onChange={handleChange}
      >
        Возраст
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="email"
        htmlFor="email"
        value={form.email}
        onChange={handleChange}
      >
        Email
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="tel"
        htmlFor="phone"
        value={form.phone}
        onChange={handleChange}
      >
        Телефон
      </FormRow>
    </BlockForm>
  );
}
