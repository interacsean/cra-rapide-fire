import React from 'react';

import Box from '../../common/Box';
import T from '../../common/Typo';

import css from './Logic.module.scss';
import editorCss from '../Editor.module.scss';
import LogicContext from './LogicContext';
import { LOGIC_DEFAULT_STATE, logicActions, logicReducer } from './logicReducer';
import Button from '../../common/Button/Button.view';
import AutocompleteView from '../../common/Autocomplete';

type Props = {

}

const Logic = (props: Props) => {
  const logicStateDisp = React.useReducer(logicReducer, LOGIC_DEFAULT_STATE);
  const [ logicState, logicDisp ] = logicStateDisp;

  const [ addVal, setAddVal ] = React.useState('');

  const addItems = React.useMemo(
    () => [
      'State',
      'Context',
    ],
    [],
  );

  const addNewItem = React.useCallback(
    () => {
      logicDisp(logicActions.addRow(addVal));
    },
    [addVal, logicDisp],
  );

  return (
    <Box className={css.container}>
      <Box className={css.header}>
        <T className={editorCss.sectionHeading}>Logic</T>
      </Box>
      <Box className={css.main}>
        <LogicContext.Provider value={logicStateDisp}>
          {
            logicState.rowOrder.map(
              logicKey => (
                <Box key={logicKey} className={css['logic-row']}>
                  { logicState.rowsById[logicKey].type }
                </Box>
              )
            )
          }
        </LogicContext.Provider>
        <Box className={css.add}>
          <AutocompleteView items={addItems} value={addVal} onChange={setAddVal} onSelect={() => {}} />
          <Button text="Add" onClick={addNewItem} />
        </Box>
      </Box>
    </Box>
  );
};

export default Logic;
