import { useState } from 'react';
import DndBlocks from './DndBlocks';
import ModalForms from './ModalForms';
import type { BlockType } from './types';

export default function Editor() {
  const [openedBlock, setOpenedBlock] = useState<BlockType | null>(null);

  return (
    <div className="flex-1 border-r border-gray-200 flex flex-col gap-4 p-4 overflow-y-auto">
      <DndBlocks setOpenedBlock={setOpenedBlock} />
      <ModalForms openedBlock={openedBlock} setOpenedBlock={setOpenedBlock} />
    </div>
  );
}
