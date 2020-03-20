import React, { useContext } from 'react';
import LogicContext from '../LogicContext';

// import Box from '../common/Box';

// import css from './LogicRow.module.scss';

type Props = {

}

const LogicRow = (props: Props) => {
  const [ state, dispatch ] = useContext(LogicContext);
  console.log(dispatch, state);
  return (
    null
  );
};

export default LogicRow;
