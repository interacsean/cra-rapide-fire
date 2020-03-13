import React from 'react';

export interface ButtonPublicProps<A extends any[]> {
  text?: string;
  children?: React.ReactNode;
  onClick?: (...args: A) => void;
  onClickParams?: A;
  className?: string;

  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;

  loading?: boolean;

  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export interface ButtonProps<A extends any[]> extends ButtonPublicProps<A> {}
