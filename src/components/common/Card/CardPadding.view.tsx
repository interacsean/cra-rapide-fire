import { FC, ReactElement } from 'react';
import React from 'react';

import clx from '../../../utils/Html/clx';

import { CardProps } from './Card.props';

import css from './Card.scss';

const CardPaddingView: FC<CardProps> = (props: CardProps): ReactElement<'div'> => {
  const classes = [props.className].flat();

  return (
    <div className={clx([...classes, css['--default-padding']])}>
      { props.children }
    </div>
  );
};

export default CardPaddingView;
