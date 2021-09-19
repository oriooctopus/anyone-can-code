import {
  CodeChallengeDataFragment,
  MultipleChoiceChallengeDataFragment,
} from 'src/generated/graphql';

export type ChallengeFragment =
  | MultipleChoiceChallengeDataFragment
  | CodeChallengeDataFragment;
