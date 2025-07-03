import type { PayloadAction } from '@reduxjs/toolkit';

export function updateSliceArray<T extends { id: string }>(
  id: string | null,
  array: T[],
  action: PayloadAction<T>,
): T[] {
  if (id) {
    return array.map((item) => (item.id === id ? action.payload : item));
  } else {
    return [...array, action.payload];
  }
}
