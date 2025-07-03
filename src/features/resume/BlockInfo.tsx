import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export default function BlockInfo({ title, children }: Props) {
  return (
    <div className="border-b border-gray-200 p-4 rounded bg-gray-50 cursor-pointer group relative">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <div className="flex flex-col gap-1">{children}</div>

      <button className="absolute top-2 right-2 text-2xl cursor-pointer hover:text-red-700 transition-colors">
        &times;
      </button>
    </div>
  );
}
