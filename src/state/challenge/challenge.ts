import {
  challengeAttemptStatusVar,
  currentChallengeIndexVar,
} from 'src/state/challenge/challenge.reactiveVariables';
import { ChallengeAttemptStatusEnum } from 'src/state/challenge/challenge.types';
import { resetTestResults } from 'src/state/challenge/codeChallenge/codeChallenge';
import { updateChallengeCompletionData } from 'src/state/lessonCompletion/lessonCompletion';

export const setChallengeIndex = (challengeIndex: number) => {
  currentChallengeIndexVar(challengeIndex);
  resetTestResults();
};

/**
 * We can update this to take in an index if we need to
 * in the future. In that case we'll just have the default
 * parameter be the current challenge
 */
export const passChallenge = () => {
  challengeAttemptStatusVar(ChallengeAttemptStatusEnum.passed);
  updateChallengeCompletionData({
    completed: {
      $set: true,
    },
  });
};

/**
 * We don't modify the completion data because if they've already
 * they shouldn't have to worry about passing again. Especially in
 * a scenario where they're maybe just playing around after initially
 * solving.
 */
export const failChallenge = () => {
  challengeAttemptStatusVar(ChallengeAttemptStatusEnum.failed);
};
