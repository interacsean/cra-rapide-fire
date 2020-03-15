import React from 'react';

import Box from '../../common/Box';
import T from '../../common/Typo';

import css from './Logic.module.scss';
import editorCss from '../Editor.module.scss';

type Props = {

}

const Logic = (props: Props) => {


  return (
    <Box className={css.container}>
      <Box className={css.header}>
        <T className={editorCss.sectionHeading}>Logic</T>
      </Box>
      <Box className={css.main}>

      </Box>
    </Box>
  );
};

export default Logic;
