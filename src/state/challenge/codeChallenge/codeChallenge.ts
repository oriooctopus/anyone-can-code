import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { RecursiveNormalize } from 'src/utils/general';
import {
  getLearningStepCompletionData,
  getStoredCodeFromLastChallengeData,
} from 'components/Challenges/CodeChallenge/CodeChallenge.utils';

export const resetTestResults = () => {
  testResultsVar([]);
};

export const getCodeChallengeStartingCode = (
  challenge: RecursiveNormalize<CodeChallengeDataFragment>,
  ignoreCurrentChallengeStoredCode?: boolean,
) => {
  const { startingCode, getStartingCodeFromPreviousChallenge } =
    challenge || {};
  const storedCode = getLearningStepCompletionData({})?.code;
  const previousChallengeStoredCode =
    getStartingCodeFromPreviousChallenge &&
    getStoredCodeFromLastChallengeData();

  if (getStartingCodeFromPreviousChallenge && startingCode) {
    throw new Error(
      'Both getStartingCodeFromPreviousChallenge and startingCode are set. Please only set one per challenge',
    );
  } else if (!challenge) {
    return '';
  } else if (storedCode && !ignoreCurrentChallengeStoredCode) {
    return storedCode;
  } else if (startingCode) {
    return startingCode;
  } else if (previousChallengeStoredCode) {
    return previousChallengeStoredCode;
  } else {
    return '';
  }
};
