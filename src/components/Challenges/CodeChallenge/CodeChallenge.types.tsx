import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';

export type CodeChallengeTests =
  FlattenStrapi<CodeChallengeDataFragment>['tests'];
