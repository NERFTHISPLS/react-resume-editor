import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import { setSelectedExperienceId } from './resumeSlice';

interface Props {
  onClick: () => void;
}

export default function Experience({ onClick }: Props) {
  const experience = useSelector((state: RootState) => state.resume.experience);
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Опыт работы</h2>

      {experience.length > 0 &&
        experience.map((item) => (
          <BlockInfo
            key={item.id}
            title={item.position}
            onClick={() => dispatch(setSelectedExperienceId(item.id))}
          >
            <BlockInfoRow title="Компания" info={item.company} />
            <BlockInfoRow
              title="Даты"
              info={`${item.startDate} - ${item.endDate}`}
            />
            <BlockInfoRow title="Описание" info={item.description} />
          </BlockInfo>
        ))}

      <AddBlockButton onClick={() => dispatch(setSelectedExperienceId(null))}>
        + Добавить опыт работы
      </AddBlockButton>
    </section>
  );
}
