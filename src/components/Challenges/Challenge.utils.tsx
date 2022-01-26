import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { ChallengeFragment } from 'src/types/generalTypes';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';

export const isCodeChallenge = (
  challenge: FlattenStrapi<ChallengeFragment> | undefined,
): challenge is FlattenStrapi<CodeChallengeDataFragment> =>
  challenge?.__typename === 'CodeChallenge';
