import { makeVar } from '@apollo/client';
import { sublessonChallengeStartingIndex } from 'src/App.constants';
import { ChallengeAttemptStatusEnum } from 'src/state/challenge/challenge.types';

export const challengeAttemptStatusVar = makeVar<ChallengeAttemptStatusEnum>(
  ChallengeAttemptStatusEnum.notAttempted,
);

export const currentChallengeIndexVar = makeVar(
  sublessonChallengeStartingIndex,
);
