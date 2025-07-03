import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import { deleteEducation, setSelectedEducationId } from './resumeSlice';

interface Props {
  onClick: () => void;
}

export default function Education({ onClick }: Props) {
  const education = useSelector((state: RootState) => state.resume.education);
  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();

    dispatch(deleteEducation(id));
  };

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Образование</h2>

      {education.length > 0 &&
        education.map((item) => (
          <BlockInfo
            key={item.id}
            title={item.institution}
            onClick={() => dispatch(setSelectedEducationId(item.id))}
            onDelete={(e) => handleDelete(e, item.id)}
          >
            <BlockInfoRow title="Специальность" info={item.specialization} />
            <BlockInfoRow
              title="Даты"
              info={`${item.startDate} - ${item.endDate}`}
            />
          </BlockInfo>
        ))}

      <AddBlockButton
        className="mt-4"
        onClick={() => dispatch(setSelectedEducationId(null))}
      >
        + Добавить образование
      </AddBlockButton>
    </section>
  );
}
