import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

export default function Experience() {
  const experience = useSelector((state: RootState) => state.resume.experience);

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
