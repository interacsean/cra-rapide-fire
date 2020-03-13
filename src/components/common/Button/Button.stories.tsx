import React from 'react';
import Button from './index';
import T from '../Typo';
import Card from '../Card';
import Box from '../Box';

import css from './Button.stories.scss';

const ButtonStory = () => {
  return (
    <div>
      <Box className="flex-ctnr --wrap">
        <Card className={css.card}>
          <T>Vanilla button</T>
          <Button>This is a button</Button>
        </Card>
        <Card className={css.card}>
          <T>Large button</T>
          <Button large>Large button</Button>
        </Card>
        <Card className={css.card}>
          <T>Loading</T>
          <Button>Loading below</Button>
          <Button loading>Loading below</Button>
        </Card>
        <Card className={css.card}>
          <T>Full width</T>
          <Button fullWidth>Wide button</Button>
        </Card>
        <Card className={css.card}>
          <T>Secondary button</T>
          <Button secondary>Secondary button</Button>
        </Card>
        <Card className={css.card}>
          <T>Outline</T>
          <Button outline>Outline button</Button>
        </Card>
        <Card className={css.card}>
          <T>Outline secondary</T>
          <Button outline secondary>Outline secondary</Button>
        </Card>
        <Card className={css.card}>
          <T>Disabled</T>
          <Button disabled>Disabled</Button>
        </Card>
        <Card className={css.card}>
          <T>Disabled outline</T>
          <Button disabled outline>Disabled outline</Button>
        </Card>
      </Box>
    </div>
  );
}

export default ButtonStory;
