import type { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import AddBlockButton from '../../ui/AddBlockButton';
import BlockInfo from './BlockInfo';
import BlockInfoRow from './BlockInfoRow';
import { deleteSkill, setSelectedSkillId } from './resumeSlice';

interface Props {
  onClick: () => void;
}

export default function Skills({ onClick }: Props) {
  const skills = useSelector((state: RootState) => state.resume.skills);
  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();

    dispatch(deleteSkill(id));
  };

  return (
    <section className="flex flex-col" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">Навыки</h2>

      <ul className="grid grid-cols-3 gap-2">
        {skills.length > 0 &&
          skills.map((item) => (
            <li key={item.id}>
              <BlockInfo
                onClick={() => dispatch(setSelectedSkillId(item.id))}
                onDelete={(e) => handleDelete(e, item.id)}
              >
                <BlockInfoRow info={item.name} />
              </BlockInfo>
            </li>
          ))}
      </ul>

      <AddBlockButton
        className="mt-4"
        onClick={() => dispatch(setSelectedSkillId(null))}
      >
        + Добавить навык
      </AddBlockButton>
    </section>
  );
}
