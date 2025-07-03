import { format } from 'date-fns';
import { DATE_FORMAT_UI } from '../../utils/constants';
import BlockInfoRow from './BlockInfoRow';
import PreviewBlock from './PreviewBlock';
import type { Experience } from './types';

interface Props {
  experience: Experience[];
}

export default function ExperiencePreview({ experience }: Props) {
  if (experience.length === 0) return null;

  return (
    <PreviewBlock title="Опыт работы">
      {experience.map((item) => (
        <div key={item.id} className="mb-2 last:mb-0">
          <BlockInfoRow title="Должность" info={item.position} />
          <BlockInfoRow title="Компания" info={item.company} />
          <BlockInfoRow
            title="Даты"
            info={`${format(item.startDate, DATE_FORMAT_UI)} - ${format(item.endDate, DATE_FORMAT_UI)}`}
          />
          <BlockInfoRow title="Описание" info={item.description} />
        </div>
      ))}
    </PreviewBlock>
  );
}
