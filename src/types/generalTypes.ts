import {
  CodeChallengeDataFragment,
  MultipleChoiceChallengeDataFragment,
  PlaygroundDataFragment,
} from 'src/generated/graphql';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';

export type StepFragment = FlattenStrapi<
  | MultipleChoiceChallengeDataFragment
  | CodeChallengeDataFragment
  | PlaygroundDataFragment
>;

export enum ProgressStateEnum {
  INCOMPLETE = 'INCOMPLETE',
  CURRENT = 'CURRENT',
  COMPLETE = 'COMPLETE',
}
