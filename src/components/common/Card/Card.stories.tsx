import React from 'react';
import Box from '../Box';

import Card from './index'
import css from './Card-stories.scss';

const DemoCard = (p: any) => (
  <Card {...p}>
    <h3 className="h3">Hey everybody</h3>
    <p className="content">I'm a card</p>
  </Card>
);

const CardStory = () => {
  return (
    <div>
      <Box className="grid">
        <Box className={["_6 theme--dark", css['dark-bg'], css.ctnr]}>
          <DemoCard />
        </Box>
        <Box className={["_6 theme--light", css.ctnr]}>
          <DemoCard />
        </Box>
        <Box className={["_6 theme--dark", css['dark-bg'], css.ctnr]}>
          <DemoCard inset />
        </Box>
        <Box className={["_6 theme--light", css.ctnr]}>
          <DemoCard inset />
        </Box>
      </Box>
    </div>
  );
};

export default CardStory;
