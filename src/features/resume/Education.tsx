import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

export default function Education() {
  const education = useSelector((state: RootState) => state.resume.education);

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
