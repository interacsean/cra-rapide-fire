import { ReactElement } from 'react';
import React from 'react';

import orUndef from '../../../utils/Data/orUndef/orUndef';
import clx from '../../../utils/Html/clx';

import { ButtonProps } from './Button.props';

import css from './Button.module.scss';

const ButtonView = <A extends any[]>(props: ButtonProps<A>): ReactElement<'div'> => {
  if (!props.text && !props.children) {
    throw new Error('Button requires either `text` or `children` prop')
  }
  const onClickHandler = React.useCallback(
    () => !props.disabled && props.onClick
      ? props.onClick(...(props?.onClickParams || []) as unknown as A)
      : null,
    [props.onClick, props.disabled, ...props?.onClickParams || []],
  );
  const child = props.children || <span>{props.text}</span>;

  return (
    <div
      onClick={onClickHandler}
      className={clx([
        css['button-main'],
        props.className,
        orUndef(props.secondary && css['--style-secondary']),
        orUndef(props.tertiary && css['--style-tertiary']),
        orUndef(props.outline && css['--style-outline']),
        orUndef(props.large && css['--size-large']),
        orUndef(props.small && css['--size-small']),
        orUndef(props.disabled && css['--state-disabled']),
        orUndef(props.fullWidth && css['--var-full-width']),
      ])}
    >
      { props.loading && (
        <span className={css['loading-indicator']}><img src="/images/site/loading.svg" width="30"/></span>
      )}
      <span className={clx([css.content, orUndef(props.loading && css['--loading'])])}>{ child }</span>
    </div>
  );
};

export default React.memo(ButtonView);
