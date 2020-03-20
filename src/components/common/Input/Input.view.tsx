import { ChangeEvent, FC, ReactElement, useCallback, FocusEvent } from 'react';
import React from 'react';

import { InputProps } from './Input.props';

import css from './Input.module.scss';
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

  const onChangeCb = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.value),
    [onChange],
  );

  const onBlurCb = useCallback(
    (e: FocusEvent<HTMLInputElement>) => onBlur && onBlur(e.target.value),
    [onBlur],
  );

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
