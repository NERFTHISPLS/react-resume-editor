import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';

export default function Certificates() {
  const certificates = useSelector(
    (state: RootState) => state.resume.certificates,
  );

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-2">Сертификаты</h2>

      {certificates.length > 0 &&
        certificates.map((item) => (
          <BlockInfo key={item.name} title={item.name}>
            <BlockInfoRow title="Дата" info={item.date} />
            <BlockInfoRow title="Описание" info={item.description} />
          </BlockInfo>
        ))}

      <AddBlockButton>+ Добавить сертификат</AddBlockButton>
    </section>
  );
}
