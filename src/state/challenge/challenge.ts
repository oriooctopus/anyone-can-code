import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { resetTestResults } from 'src/state/challenge/codeChallenge/codeChallenge';

export const setChallengeIndex = (challengeIndex: number) => {
  currentChallengeIndexVar(challengeIndex);
  resetTestResults();
};
