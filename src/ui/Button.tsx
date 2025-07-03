import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'neutral' | 'danger';
  className?: string;
}

const base = 'px-4 py-2 rounded font-semibold transition-colors cursor-pointer';
const variants = {
  primary: 'bg-green-600 text-white hover:bg-green-700',
  neutral: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  danger: 'bg-red-500 text-white hover:bg-red-600',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: Props) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
