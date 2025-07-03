import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import { setSelectedCertificateId } from './resumeSlice';

interface Props {
  onClick: () => void;
}

export default function Certificates({ onClick }: Props) {
  const certificates = useSelector(
    (state: RootState) => state.resume.certificates,
  );

  const dispatch = useDispatch();

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Сертификаты</h2>

      {certificates.length > 0 &&
        certificates.map((item) => (
          <BlockInfo
            key={item.id}
            title={item.name}
            onClick={() => dispatch(setSelectedCertificateId(item.id))}
          >
            <BlockInfoRow title="Дата" info={item.date} />
            <BlockInfoRow title="Описание" info={item.description} />
          </BlockInfo>
        ))}

      <AddBlockButton
        className="mt-4"
        onClick={() => dispatch(setSelectedCertificateId(null))}
      >
        + Добавить сертификат
      </AddBlockButton>
    </section>
  );
}
