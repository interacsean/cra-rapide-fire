import React from 'react';
import Box from '../common/Box';

import Logic from './Logic';

import css from './Editor.module.scss';

const Editor = () => {


  return (
    <Box className={css.container}>
      <Box className={css.props}>
        // props
      </Box>
      <Box className={css.logic}>
        <Logic />
      </Box>
      <Box className={css.render}>
        // render
      </Box>
      <Box className={css.settings}>
        // settings
      </Box>
    </Box>
  );
};

export default Editor;
