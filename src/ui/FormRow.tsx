import type { ChangeEvent, ReactNode } from 'react';

interface Props {
  inputType: string;
  htmlFor?: string;
  className?: string;
  value?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  children: ReactNode;
}

export default function FormRow({
  inputType,
  htmlFor,
  className = '',
  value,
  onChange,
  children,
}: Props) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="font-medium" htmlFor={htmlFor}>
        {children}
      </label>

      {inputType !== 'textarea' && (
        <input
          type={inputType}
          className="border border-gray-300 rounded-md p-2"
          id={htmlFor}
          value={value}
          onChange={onChange}
        />
      )}

      {inputType === 'textarea' && (
        <textarea
          className="border border-gray-300 rounded-md p-2"
          id={htmlFor}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
