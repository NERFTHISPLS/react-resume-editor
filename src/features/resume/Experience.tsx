import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import type { Experience } from './types';

export default function Experience() {
  const experience: Experience[] = [
    {
      position: 'Frontend Developer',
      company: 'Google',
      startDate: '01.01.2020',
      endDate: '01.01.2021',
      description:
        'Developed and maintained web applications using React and Node.js',
    },
    {
      position: 'Backend Developer',
      company: 'Yandex',
      startDate: '01.01.2021',
      endDate: '01.01.2022',
      description:
        'Developed and maintained backend services using Node.js and PostgreSQL',
    },
  ];

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-2">Опыт работы</h2>

      {experience.length > 0 &&
        experience.map((item) => (
          <BlockInfo key={item.position} title={item.position}>
            <BlockInfoRow title="Компания" info={item.company} />
            <BlockInfoRow
              title="Даты"
              info={`${item.startDate} - ${item.endDate}`}
            />
            <BlockInfoRow title="Описание" info={item.description} />
          </BlockInfo>
        ))}

      <AddBlockButton>+ Добавить опыт работы</AddBlockButton>
    </section>
  );
}
