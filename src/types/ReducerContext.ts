import { Action } from './Action';

export type ReducerContext<T> = [
  T,
  (action: Action<any>) => void,
];
