import { Button, ButtonProps } from '@chakra-ui/button';
import { currentChallengeIndexVar, testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { ChallengeFragment } from 'src/types/generalTypes';

export const isCodeChallenge = (
  challenge: ChallengeFragment | undefined,
): challenge is CodeChallengeDataFragment =>
  challenge?.__typename === 'CodeChallenge';

// Maybe this kind of thing should go in some sort of global state file
export const setChallengeIndex = (challengeIndex: number) => {
  currentChallengeIndexVar(challengeIndex);
};
