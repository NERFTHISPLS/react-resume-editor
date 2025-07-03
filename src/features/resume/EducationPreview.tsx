import { format } from 'date-fns';
import { DATE_FORMAT_UI } from '../../utils/constants';
import BlockInfoRow from './BlockInfoRow';
import PreviewBlock from './PreviewBlock';
import type { Education } from './types';

interface Props {
  education: Education[];
}

export default function EducationPreview({ education }: Props) {
  if (education.length === 0) return null;

  return (
    <PreviewBlock title="Образование">
      {education.map((item) => (
        <div key={item.id} className="mb-2 last:mb-0">
          <BlockInfoRow title="Учебное заведение" info={item.institution} />
          <BlockInfoRow title="Специальность" info={item.specialization} />
          <BlockInfoRow
            title="Даты"
            info={`${format(item.startDate, DATE_FORMAT_UI)} - ${format(item.endDate, DATE_FORMAT_UI)}`}
          />
        </div>
      ))}
    </PreviewBlock>
  );
}
