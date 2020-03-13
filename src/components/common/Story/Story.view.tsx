import { FC } from 'react';
import React from 'react';

import Box from '../Box';
import T from '../Typo';

import { StoryProps } from './Story.props';
import Card from '../Card';

// import css from './Story.scss';

const StoryView: FC<StoryProps> = (props: StoryProps): ReturnType<typeof Box> => {
  return (
    <Card className={props.className || ''}>
      <T h4>{props.title}</T>
      <div style={{ outline: '3px solid pink', margin: '3px' }}>
        { props.children }
      </div>
      { props.desc && (
        <div>
          <T contentDetail>
            { props.desc}
          </T>
        </div>
      )}
    </Card>
  );
};

export default StoryView;
