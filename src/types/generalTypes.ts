import {
  CodeChallengeDataFragment,
  ComponentSublessonchallengeChallenge,
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
