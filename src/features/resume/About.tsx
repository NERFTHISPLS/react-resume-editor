import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

export default function About() {
  const about = useSelector((state: RootState) => state.resume.about);

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-2">О себе</h2>

      {about && (
        <BlockInfo>
          <BlockInfoRow title="Описание" info={about.description} />
        </BlockInfo>
      )}

      {!about && <AddBlockButton>+ Добавить информацию о себе</AddBlockButton>}
    </section>
  );
}
