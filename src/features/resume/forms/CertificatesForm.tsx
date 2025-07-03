import { format } from 'date-fns';
import { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from '../../../store';
import type { FormChangeEvent } from '../../../types';
import BlockForm from '../../../ui/BlockForm';
import FormRow from '../../../ui/FormRow';
import { DATE_FORMAT } from '../../../utils/constants';
import {
  setCertificates,
  setSelectedCertificateId,
} from '../logic/resumeSlice';
import type { Certificate } from '../logic/types';

interface Props {
  onCancel: () => void;
}

export default function CertificatesForm({ onCancel }: Props) {
  const selectedCertificateId = useSelector(
    (state: RootState) => state.resume.selectedCertificateId,
  );

  const targetCertificate = useSelector((state: RootState) =>
    state.resume.certificates.find((cert) => cert.id === selectedCertificateId),
  );

  const [form, setForm] = useState<Certificate>(
    targetCertificate ?? {
      id: uuidv4(),
      name: '',
      date: '',
      description: '',
    },
  );

  const dispatch = useDispatch();

  const handleChange = (e: FormChangeEvent) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setCertificates(form));
    dispatch(setSelectedCertificateId(null));
    onCancel();
  };

  return (
    <BlockForm title="Сертификаты" onCancel={onCancel} onSubmit={handleSubmit}>
      <FormRow
        isRequired={true}
        inputType="text"
        htmlFor="name"
        value={form.name}
        onChange={handleChange}
      >
        Название
      </FormRow>

      <FormRow
        isRequired={true}
        inputType="date"
        htmlFor="date"
        value={form.date ? format(form.date, DATE_FORMAT) : ''}
        onChange={handleChange}
      >
        Дата
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
