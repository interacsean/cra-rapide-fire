import { Action } from '../../../types/Action';

// temp: extract and do union of all types of LogicRow
export type LogicRow = {
  type: string
};

const newRow = (type: string) => ({
  type,
});

export type LogicState = {
  rowsById: Record<string, LogicRow>,
  rowOrder: string[],
};

export const LOGIC_DEFAULT_STATE: LogicState = {
  rowsById: {},
  rowOrder: [],
};

const logicReducerHandlers: Record<string, Function> = {
  ADD_ROW: (state: LogicState, payload: string, /* action: Action<string, undefined> */): LogicState => {
    const newRowId = 'TEMP_newid';
    return ({
      rowsById: {
        ...state.rowsById,
        [newRowId]: newRow(payload),
      },
      rowOrder: state.rowOrder.concat(newRowId)
    });
  },
  default: (state: LogicState = LOGIC_DEFAULT_STATE) => state,
};

export const logicReducer = (state: LogicState, action: Action<any>): LogicState => (
  logicReducerHandlers[action.type] || logicReducerHandlers.default
).call(undefined, state, action.payload, action);

export const logicActions: Record<string, (...args: any[]) => Action<any>> = {
  // updateRowValue: (rowId: string, )
  addRow: (type: string) => ({ type: 'ADD_ROW', payload: type }),
};
