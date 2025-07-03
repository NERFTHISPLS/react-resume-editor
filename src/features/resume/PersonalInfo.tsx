import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import { setPersonalInfo } from './resumeSlice';

interface Props {
  onClick: () => void;
}

export default function PersonalInfo({ onClick }: Props) {
  const personalInfo = useSelector(
    (state: RootState) => state.resume.personalInfo,
  );

  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(setPersonalInfo(null));
  };

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Личные данные</h2>

      {personalInfo && (
        <BlockInfo onDelete={handleDelete}>
          <BlockInfoRow title="Имя" info={personalInfo.name} />
          <BlockInfoRow title="Фамилия" info={personalInfo.surname} />

          {personalInfo.patronymic && (
            <BlockInfoRow title="Отчество" info={personalInfo.patronymic} />
          )}

          <BlockInfoRow title="Возраст" info={personalInfo.age.toString()} />
          <BlockInfoRow title="Email" info={personalInfo.email} />
          <BlockInfoRow title="Телефон" info={personalInfo.phone} />
        </BlockInfo>
      )}

      {!personalInfo && (
        <AddBlockButton>+ Добавить личные данные</AddBlockButton>
      )}
    </section>
  );
}
