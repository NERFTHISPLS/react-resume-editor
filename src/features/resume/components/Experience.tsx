import { format } from 'date-fns';
import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import AddBlockButton from '../../../ui/AddBlockButton';
import { DATE_FORMAT_UI } from '../../../utils/constants';
import {
  deleteExperience,
  setSelectedExperienceId,
} from '../logic/resumeSlice';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

interface Props {
  onClick: () => void;
}

export default function Experience({ onClick }: Props) {
  const experience = useSelector((state: RootState) => state.resume.experience);
  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();

    dispatch(deleteExperience(id));
  };

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Опыт работы</h2>

      {experience.length > 0 &&
        experience.map((item) => (
          <BlockInfo
            key={item.id}
            title={item.position}
            onClick={() => dispatch(setSelectedExperienceId(item.id))}
            onDelete={(e) => handleDelete(e, item.id)}
          >
            <BlockInfoRow title="Компания" info={item.company} />
            <BlockInfoRow
              title="Даты"
              info={`${format(item.startDate, DATE_FORMAT_UI)} - ${format(item.endDate, DATE_FORMAT_UI)}`}
            />
            <BlockInfoRow title="Описание" info={item.description} />
          </BlockInfo>
        ))}

      <AddBlockButton
        className="mt-4"
        onClick={() => dispatch(setSelectedExperienceId(null))}
      >
        + Добавить опыт работы
      </AddBlockButton>
    </section>
  );
}
