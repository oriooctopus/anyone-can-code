import {
  CodeChallengeDataFragment,
  MultipleChoiceChallengeDataFragment,
} from 'src/generated/graphql';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';

// export type UnparsedChallengeFragment = ComponentSublessonchallengeChallenge.

export type ChallengeFragment = FlattenStrapi<
  MultipleChoiceChallengeDataFragment | CodeChallengeDataFragment
>;

export enum ProgressStateEnum {
  INCOMPLETE = 'INCOMPLETE',
  CURRENT = 'CURRENT',
  COMPLETE = 'COMPLETE',
}
