import {
  CodeChallengeDataFragment,
  MultipleChoiceChallengeDataFragment,
} from 'src/generated/graphql';
import { RecursiveNormalize } from 'src/utils/normalizeStrapi';

// export type UnparsedChallengeFragment = ComponentSublessonchallengeChallenge.

export type ChallengeFragment = RecursiveNormalize<
  MultipleChoiceChallengeDataFragment | CodeChallengeDataFragment
>;

export enum ProgressStateEnum {
  INCOMPLETE = 'INCOMPLETE',
  CURRENT = 'CURRENT',
  COMPLETE = 'COMPLETE',
}
