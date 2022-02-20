import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { StepFragment } from 'src/types/generalTypes';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';

export const isCodeChallenge = (
  challenge: FlattenStrapi<StepFragment> | undefined,
): challenge is FlattenStrapi<CodeChallengeDataFragment> =>
  challenge?.__typename === 'CodeChallenge';
