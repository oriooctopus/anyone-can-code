import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import {
  getLearningStepCompletionData,
  getStoredCodeFromLastChallengeData,
} from 'components/Challenges/CodeChallenge/CodeChallenge.utils';

export const resetTestResults = () => {
  testResultsVar([]);
};

export const getCodeChallengeStartingCode = (
  challenge: CodeChallengeDataFragment,
  ignoreCurrentChallengeStoredCode?: boolean,
) => {
  const { challengeMeta, startingCode, getStartingCodeFromPreviousChallenge } =
    challenge;
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
  } else if (challengeMeta?.difficulty === 'hard') {
    return 'This is a hard challenge. Expect to struggle. TODO: Add more text to this and improve the message';
  } else {
    return '';
  }
};
