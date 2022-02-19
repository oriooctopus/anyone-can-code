import { resetTestResults } from 'src/state/challenge/codeChallenge/codeChallenge';
import { updateLearningStepCompletionData } from 'src/state/lessonCompletion/lessonCompletion';
import {
  challengeAttemptStatusVar,
  currentStepIndexVar,
} from 'src/state/step/step.reactiveVariables';
import { ChallengeAttemptStatusEnum } from 'src/state/step/step.types';

export const setStepIndex = (stepIndex: number) => {
  currentStepIndexVar(stepIndex);
  resetTestResults();
};

/**
 * We can update this to take in an index if we need to
 * in the future. In that case we'll just have the default
 * parameter be the current challenge
 */
export const passChallenge = () => {
  challengeAttemptStatusVar(ChallengeAttemptStatusEnum.passed);
  updateLearningStepCompletionData({
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
