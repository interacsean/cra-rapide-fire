import { CompWithChildren } from '../../../types/util/CompWithChildren';

export interface CardPublicProps extends CompWithChildren {
  className?: string | (string | undefined)[];
  noPad?: boolean;
  noRadius?: boolean;
  inset?: boolean;
}

export interface CardProps extends CardPublicProps {}
