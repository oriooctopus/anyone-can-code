import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import {
  getLearningStepCompletionData,
  getStoredCodeFromLastChallengeData,
} from 'components/Challenges/CodeChallenge/CodeChallenge.utils';

export const resetTestResults = () => {
  testResultsVar([]);
};

// needs to be generalized
export const getCodeChallengeStartingCode = (
  challenge: FlattenStrapi<CodeChallengeDataFragment>,
  ignoreCurrentStepStoredCode?: boolean,
) => {
  const { startingCode, getStartingCodeFromPreviousChallenge } =
    challenge || {};
  const storedCode = getLearningStepCompletionData({})?.code;
  const previousStepStoredCode =
    getStartingCodeFromPreviousChallenge &&
    getStoredCodeFromLastChallengeData();

  if (getStartingCodeFromPreviousChallenge && startingCode) {
    throw new Error(
      'Both getStartingCodeFromPreviousChallenge and startingCode are set. Please only set one per challenge',
    );
  } else if (!challenge) {
    return '';
  } else if (storedCode && !ignoreCurrentStepStoredCode) {
    return storedCode;
  } else if (startingCode) {
    return startingCode;
  } else if (previousStepStoredCode) {
    return previousStepStoredCode;
  } else {
    return '';
  }
};
