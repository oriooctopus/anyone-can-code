import {
  CodeChallengeDataFragment,
  MultipleChoiceChallengeDataFragment,
} from 'src/generated/graphql';

// export type UnparsedChallengeFragment = ComponentSublessonchallengeChallenge.

export type ChallengeFragment =
  | MultipleChoiceChallengeDataFragment
  | CodeChallengeDataFragment;

export enum ProgressStateEnum {
  INCOMPLETE = 'INCOMPLETE',
  CURRENT = 'CURRENT',
  COMPLETE = 'COMPLETE',
}
