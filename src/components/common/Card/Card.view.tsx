import { FC, ReactElement } from 'react';
import React from 'react';

import clx from '../../../utils/Html/clx';

import { CardProps } from './Card.props';

import css from './Card.module.scss';

const CardView: FC<CardProps> = (props: CardProps): ReactElement<'div'> => {
  const classes = [props.className].flat();

  return (
    <div className={clx([
      ...classes,
      css.main,
      props.inset ? css['--var-inset'] : css['--var-card'],
      !props.noRadius ? css['--default-radius'] : '',
      !props.noPad ? css['--default-padding'] : ''])}>
      { props.children }
    </div>
  );
};

export default React.memo(CardView);
