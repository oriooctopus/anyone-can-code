import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { ChallengeFragment } from 'src/types/generalTypes';

export const isCodeChallenge = (
  challenge: ChallengeFragment | undefined,
): challenge is CodeChallengeDataFragment =>
  challenge?.__typename === 'CodeChallenge';
