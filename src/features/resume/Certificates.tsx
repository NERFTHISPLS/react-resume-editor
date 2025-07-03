import { format } from 'date-fns';
import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import { DATE_FORMAT_UI } from '../../utils/constants';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import { deleteCertificate, setSelectedCertificateId } from './resumeSlice';

interface Props {
  onClick: () => void;
}

export default function Certificates({ onClick }: Props) {
  const certificates = useSelector(
    (state: RootState) => state.resume.certificates,
  );

  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();

    dispatch(deleteCertificate(id));
  };

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Сертификаты</h2>

      {certificates.length > 0 &&
        certificates.map((item) => (
          <BlockInfo
            key={item.id}
            title={item.name}
            onClick={() => dispatch(setSelectedCertificateId(item.id))}
            onDelete={(e) => handleDelete(e, item.id)}
          >
            <BlockInfoRow
              title="Дата"
              info={format(item.date, DATE_FORMAT_UI)}
            />
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
