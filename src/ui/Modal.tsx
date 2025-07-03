import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useEscapeClose } from '../hooks/useEscapeClose';

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  useEscapeClose(isOpen, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-20">
      <div
        className="bg-white p-6 rounded shadow-lg min-w-[500px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}
