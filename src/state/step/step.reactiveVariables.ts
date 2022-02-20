import { makeVar } from '@apollo/client';
import { sublessonStepStartingIndex } from 'src/App.constants';
import { ChallengeAttemptStatusEnum } from 'src/state/step/step.types';

// maybe this should be moved to a different file?
export const challengeAttemptStatusVar = makeVar<ChallengeAttemptStatusEnum>(
  ChallengeAttemptStatusEnum.notAttempted,
);

export const currentStepIndexVar = makeVar(sublessonStepStartingIndex);
