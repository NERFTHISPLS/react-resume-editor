import type { MouseEvent, ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
  onClick?: () => void;
  onDelete?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function BlockInfo({
  title,
  onClick,
  onDelete,
  children,
}: Props) {
  return (
    <div
      className="border-b border-gray-300 p-4 rounded bg-gray-50 cursor-pointer group relative"
      onClick={onClick}
    >
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}

      <div className="flex flex-col gap-1">{children}</div>

      <button
        className="absolute top-2 right-2 text-2xl cursor-pointer hover:text-red-700 transition-colors"
        onClick={onDelete}
      >
        &times;
      </button>
    </div>
  );
}
