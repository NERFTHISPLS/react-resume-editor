import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

interface Props {
  onClick: () => void;
}

export default function About({ onClick }: Props) {
  const about = useSelector((state: RootState) => state.resume.about);

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">О себе</h2>

      {about && (
        <BlockInfo>
          <BlockInfoRow info={about.description} />
        </BlockInfo>
      )}

      {!about && <AddBlockButton>+ Добавить информацию о себе</AddBlockButton>}
    </section>
  );
}
