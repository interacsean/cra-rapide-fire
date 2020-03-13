import { FC } from 'react';
import React from 'react';

import { TypoPublicProps, TypoProps } from "./Typo.props";

import TypoView from './Typo.view';
import clx from '../../../utils/Html/clx';

const VALID_TYPES = [
  'content',
  'content-detail',
  'content-caption',
  'content-feature',
  'content-form-text',
  'content-field-label',
  'content-tag',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
];

const TAG_MAP: Record<string, string> = {
  /*content: 'p',
  'content-detail': 'p',
  'content-caption': 'p',
  'content-feature': 'p',
  'content-form-text': 'p',
  'content-field-label': 'p',*/
  'content-tag': 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
};

function getTypeClass(props: TypoPublicProps) {
  for (let i in VALID_TYPES) {
    // @ts-ignore
    if (props[VALID_TYPES[i]]) {
      return VALID_TYPES[i];
    }
  }
  return '';
}

const TypoContainer: FC<TypoPublicProps> = ({ htmlFor, className, ...props }: TypoPublicProps) => {
  const typeClass: string = React.useMemo(() => getTypeClass(props), [props]);

  const combinedProps: TypoProps = {
    htmlFor,
    useClassName: clx(
      [`${typeClass}${props.anemic ? '--anemic' : ''}`].concat(className || []),
    ),
    useTagName: props.tagName || TAG_MAP[typeClass] || 'p',
    children: props.children,
  };
  
  return TypoView(combinedProps);
};

export default React.memo(TypoContainer);
