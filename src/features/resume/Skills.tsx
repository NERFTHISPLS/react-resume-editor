import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import type { Skill } from './types';

export default function Skills() {
  const skills: Skill[] = [
    {
      name: 'HTML',
      level: 'advanced',
    },
    {
      name: 'CSS',
      level: 'intermediate',
    },
  ];

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-2">Навыки</h2>

      {skills.length > 0 &&
        skills.map((item) => (
          <BlockInfo key={item.name} title={item.name}>
            <BlockInfoRow title="Уровень" info={item.level} />
          </BlockInfo>
        ))}

      <AddBlockButton>+ Добавить навык</AddBlockButton>
    </section>
  );
}
