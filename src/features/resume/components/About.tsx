import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import AddBlockButton from '../../../ui/AddBlockButton';
import { setAbout } from '../logic/resumeSlice';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

interface Props {
  onClick: () => void;
}

export default function About({ onClick }: Props) {
  const about = useSelector((state: RootState) => state.resume.about);
  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(setAbout(null));
  };

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">О себе</h2>

      {about && (
        <BlockInfo onDelete={handleDelete}>
          <BlockInfoRow info={about.description} />
        </BlockInfo>
      )}

      {!about && <AddBlockButton>+ Добавить информацию о себе</AddBlockButton>}
    </section>
  );
}
