import { ChangeEvent, FC, ReactElement, useCallback, FocusEvent } from 'react';
import React from 'react';

import { InputProps } from './Input.props';

import css from './Input.scss';
import clx from '../../../utils/Html/clx';

const InputView: FC<InputProps> = ({
  inputRef,
  className,
  onChange,
  onBlur,
  inline,
  ...inputProps
}: InputProps): ReactElement<'div'> => {
  const propsClassNames = className && clx(className) || undefined;

  const onChangeCb = onChange !== undefined ?
    useCallback(
      (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
      [onChange],
    )
    : undefined;
  const onBlurCb = onBlur !== undefined
    ? useCallback(
      (e: FocusEvent<HTMLInputElement>) => onBlur(e.target.value),
      [onBlur],
    )
    : undefined;

  return (
    <input
      ref={inputRef}
      type="text"
      className={clx([propsClassNames, css.input, !inline ? css['--width-full'] : ''])}
      onChange={onChangeCb}
      onBlur={onBlurCb}
      { ...inputProps }
    />
  );
};

export default React.memo(InputView);
