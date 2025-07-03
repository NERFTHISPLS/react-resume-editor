import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import type { PersonalInfo } from './types';

export default function PersonalInfoBlock() {
  const personalInfo: PersonalInfo | null = {
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Иванович',
    email: 'ivanov@example.com',
    phone: '+79991234567',
  };

  return (
    <section className="flex flex-col">
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
