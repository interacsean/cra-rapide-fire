import { CompWithChildren } from '../../../types/util/CompWithChildren';

export interface StoryPublicProps extends CompWithChildren {
  title: string;
  className?: string;
  desc?: string;
}

export interface StoryProps extends StoryPublicProps {}
