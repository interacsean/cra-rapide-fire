import { CompWithChildren } from '../../../types/util/CompWithChildren';

export interface TypoPassedThruProps extends CompWithChildren {
  htmlFor?: string;
}

export interface TypoPublicProps extends TypoPassedThruProps {
  tagName?: string;
  className?: string | string[];
  anemic?: boolean;
  /* content types */
  content?: boolean;
  contentDetail?: boolean;
  contentCaption?: boolean;
  contentFeature?: boolean;
  contentFormText?: boolean;
  contentTag?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
}

interface TypoCalcedProps {
  useClassName: string;
  useTagName: string;
}

export interface TypoProps extends TypoCalcedProps, TypoPassedThruProps {}
