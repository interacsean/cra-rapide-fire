import React, { Ref } from 'react';

// import { CompWithChildren } from '../../../types/util/CompWithChildren';

type HTMLInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface InputPublicProps extends
  Omit<HTMLInputProps, 'className' | 'onChange' | 'onBlur'>
{
  inputRef?: Ref<any>;
  className?: string | (string | undefined)[];
  onChange?: (val: string) => void;
  onBlur?: (val: string) => void;
  inline?: boolean;
}

export interface InputProps extends InputPublicProps {}
