import { ReactNode } from 'react';

export interface AutocompletePublicProps<T> {
  items: T[];
  value: string;
  onChange: (val: string) => void;
  // toconsider: should onSelect take param: T instead of string?
  onSelect: (val: string) => void;
  filterItems?: (item: T) => boolean;
  sortItems?: (itemA: T, itemB: T) => -1 | 0 | 1;
  renderRow?: (item: T, isMatch: boolean, isSelected: boolean, value: string) => ReactNode;
  getItemValue?: (item: T) => string;
  isItemMatch?: (item: T, value: string) => boolean;
  inputClassName?: string;
  placeholder?: string;
  className?: string | (string | undefined)[];
  allowFreeEntry?: boolean;
  disableSelectBySpace?: boolean;
}

export interface AutocompleteProps<T> extends AutocompletePublicProps<T> {}
