import { CompWithChildren } from '../../../types/util/CompWithChildren';

export interface BoxPublicProps extends CompWithChildren {
  className?: string | (string | undefined)[];
  tagName?: string;
  onClick?: () => void;
}


export interface BoxProps extends BoxPublicProps {}
