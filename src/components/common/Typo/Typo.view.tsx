import { FC, ReactElement } from 'react';
import React from 'react';

import { TypoProps } from './Typo.props';

const TypoView: FC<TypoProps> = ({
  useTagName,
  useClassName,
  children,
  ...props
}: TypoProps): ReactElement<'div'> => {
  const Tag = useTagName;

  return (
    // @ts-ignore
    <Tag {...props} className={useClassName}>{children}</Tag>
  );
};

export default TypoView;
