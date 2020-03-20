import { createContext } from 'react';
import { ReducerContext } from '../../../types/ReducerContext';

import { LOGIC_DEFAULT_STATE, LogicState } from './logicReducer';

const LogicContext = createContext<ReducerContext<LogicState>>([
  LOGIC_DEFAULT_STATE,
  // dummy dispatch fn, should never be used if provider is immediately passed a useReducer return state and dispatch
  () => {},
]);

export default LogicContext;
