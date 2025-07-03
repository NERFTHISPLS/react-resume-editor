import type { ChangeEvent } from 'react';

export type FormChangeEvent =
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLInputElement>;
