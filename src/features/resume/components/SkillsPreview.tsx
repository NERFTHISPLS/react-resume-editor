import type { Skill } from '../logic/types';
import BlockInfoRow from './BlockInfoRow';
import PreviewBlock from './PreviewBlock';

interface Props {
  skills: Skill[];
}

export default function SkillsPreview({ skills }: Props) {
  if (skills.length === 0) return null;

  return (
    <PreviewBlock title="Навыки">
      <ul className="grid grid-cols-3 gap-2">
        {skills.map((item) => (
          <li
            className="py-2 bg-blue-50 rounded-md text-center border border-blue-200"
            key={item.id}
          >
            <BlockInfoRow info={item.name} />
          </li>
        ))}
      </ul>
    </PreviewBlock>
  );
}
