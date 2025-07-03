import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function AddBlockButton({ onClick, children }: Props) {
  return (
    <button
      className="border border-dashed border-gray-400 p-4 rounded text-gray-500 hover:bg-gray-100 cursor-pointer transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
