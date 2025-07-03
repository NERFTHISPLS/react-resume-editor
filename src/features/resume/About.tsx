import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import type { About } from './types';

export default function About() {
  const about: About = {
    description: 'About me',
  };

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-2">О себе</h2>

      <BlockInfo>
        <BlockInfoRow title="Описание" info={about.description} />
      </BlockInfo>

      {!about.description && (
        <AddBlockButton>+ Добавить информацию о себе</AddBlockButton>
      )}
    </section>
  );
}
