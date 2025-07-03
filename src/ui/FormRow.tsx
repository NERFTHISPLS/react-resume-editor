import type { ReactNode } from 'react';
import type { FormChangeEvent } from '../types';

interface Props {
  inputType: string;
  htmlFor?: string;
  className?: string;
  value?: string;
  isRequired?: boolean;
  onChange?: (e: FormChangeEvent) => void;
  children?: ReactNode;
}

export default function FormRow({
  inputType,
  htmlFor,
  className = '',
  isRequired = false,
  value,
  onChange,
  children,
}: Props) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="font-medium" htmlFor={htmlFor}>
        {children ?? ''}
        {isRequired && <span className="text-red-700">*</span>}
      </label>

      {inputType !== 'textarea' && (
        <input
          required={isRequired}
          type={inputType}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id={htmlFor}
          value={value}
          onChange={onChange}
        />
      )}

      {inputType === 'textarea' && (
        <textarea
          required={isRequired}
          className="border border-gray-300 rounded-md p-2"
          id={htmlFor}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
