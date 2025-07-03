import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import type { Education } from './types';

export default function Education() {
  const education: Education[] = [
    {
      institution: 'Московский государственный университет',
      specialization: 'Информатика и вычислительная техника',
      startDate: '01.01.2020',
      endDate: '01.01.2024',
      description: 'Специальность: Информатика и вычислительная техника',
    },
  ];

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-2">Образование</h2>

      {education.length > 0 &&
        education.map((item) => (
          <BlockInfo key={item.institution} title={item.institution}>
            <BlockInfoRow title="Специальность" info={item.specialization} />
            <BlockInfoRow
              title="Даты"
              info={`${item.startDate} - ${item.endDate}`}
            />
            <BlockInfoRow title="Описание" info={item.description} />
          </BlockInfo>
        ))}

      <AddBlockButton>+ Добавить образование</AddBlockButton>
    </section>
  );
}
