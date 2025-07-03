import { format } from 'date-fns';
import { DATE_FORMAT_UI } from '../../../utils/constants';
import type { Certificate } from '../logic/types';
import BlockInfoRow from './BlockInfoRow';
import PreviewBlock from './PreviewBlock';

interface Props {
  certificates: Certificate[];
}

export default function CertificatesPreview({ certificates }: Props) {
  if (certificates.length === 0) return null;

  return (
    <PreviewBlock title="Сертификаты">
      {certificates.map((item) => (
        <div key={item.id} className="mb-2 last:mb-0">
          <BlockInfoRow title="Название" info={item.name} />
          <BlockInfoRow title="Дата" info={format(item.date, DATE_FORMAT_UI)} />
          <BlockInfoRow title="Описание" info={item.description} />
        </div>
      ))}
    </PreviewBlock>
  );
}
