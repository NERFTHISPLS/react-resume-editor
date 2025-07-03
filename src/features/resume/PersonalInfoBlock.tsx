import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

interface Props {
  onClick: () => void;
}

export default function PersonalInfoBlock({ onClick }: Props) {
  const personalInfo = useSelector(
    (state: RootState) => state.resume.personalInfo,
  );

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Личные данные</h2>

      {personalInfo && (
        <BlockInfo>
          <BlockInfoRow title="Имя" info={personalInfo.name} />
          <BlockInfoRow title="Фамилия" info={personalInfo.surname} />

          {personalInfo.patronymic && (
            <BlockInfoRow title="Отчество" info={personalInfo.patronymic} />
          )}

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
