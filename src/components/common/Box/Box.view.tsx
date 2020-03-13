import { FC, ReactElement } from 'react';
import React from 'react';

import { BoxProps } from './Box.props';
import clx from '../../../utils/Html/clx';

const BoxView: FC<BoxProps> = (props: BoxProps): ReactElement<'div'> => {
  const Tag = props.tagName || 'div';
  return (
    // @ts-ignore
    <Tag className={props.className && clx(props.className)} {
      ...props.onClick ? { onClick: props.onClick } : {}
    }>
        {props.children}
    </Tag>
  );
};

export default React.memo(BoxView);
