import type { PersonalInfo } from '../logic/types';
import BlockInfoRow from './BlockInfoRow';
import PreviewBlock from './PreviewBlock';

interface Props {
  personalInfo: PersonalInfo;
}

export default function PersonalInfoPreview({ personalInfo }: Props) {
  return (
    <PreviewBlock title="Личные данные">
      <BlockInfoRow title="Имя" info={personalInfo.name} />
      <BlockInfoRow title="Фамилия" info={personalInfo.surname} />
      {personalInfo.patronymic && (
        <BlockInfoRow title="Отчество" info={personalInfo.patronymic} />
      )}
      <BlockInfoRow title="Возраст" info={personalInfo.age.toString()} />
      <BlockInfoRow title="Email" info={personalInfo.email} />
      <BlockInfoRow title="Телефон" info={personalInfo.phone} />
    </PreviewBlock>
  );
}
