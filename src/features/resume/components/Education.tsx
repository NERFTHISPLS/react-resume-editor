import { format } from 'date-fns';
import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import AddBlockButton from '../../../ui/AddBlockButton';
import { DATE_FORMAT_UI } from '../../../utils/constants';
import { deleteEducation, setSelectedEducationId } from '../logic/resumeSlice';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

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
              info={`${format(item.startDate, DATE_FORMAT_UI)} - ${format(item.endDate, DATE_FORMAT_UI)}`}
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
