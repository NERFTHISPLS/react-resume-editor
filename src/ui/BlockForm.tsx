import type { FormEvent, ReactNode } from 'react';
import Button from './Button';

interface Props {
  title: string;
  children: ReactNode;
  onCancel: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function BlockForm({
  title,
  onCancel,
  children,
  onSubmit,
}: Props) {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {children}

      <div className="flex gap-2 justify-end mt-2">
        <Button type="button" variant="neutral" onClick={onCancel}>
          Отмена
        </Button>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
}
