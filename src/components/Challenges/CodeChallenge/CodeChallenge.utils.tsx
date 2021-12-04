import { useReactiveVar } from '@apollo/client';
import { useRef } from 'react';
import { runTests } from 'src/codeRunning/codeRunning';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { failChallenge, passChallenge } from 'src/state/challenge/challenge';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { lessonCompletionDataType } from 'src/state/lessonCompletion/lessonCompletion.types';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { CodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.types';

type TGetStoredCodeFromCompletionData = {
  challengeIndex?: number;
  sublessonIndex?: number;
  lessonCompletionData?: lessonCompletionDataType;
};

export const getStoredCodeFromCompletionData = ({
  challengeIndex = currentChallengeIndexVar(),
  sublessonIndex = currentSublessonIndexVar(),
  lessonCompletionData = lessonCompletionDataVar(),
}: TGetStoredCodeFromCompletionData) => {
  return lessonCompletionData[sublessonIndex]?.challenges?.[challengeIndex]
    ?.code;
};

export const useGetStoredCodeFromCompletionData = () => {
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const lessonCompletionData = useReactiveVar(lessonCompletionDataVar);

  return getStoredCodeFromCompletionData({
    challengeIndex: currentChallengeIndex,
    sublessonIndex: currentSublessonIndex,
    lessonCompletionData,
  });
};

export const getCodeChallengeStartingCode = (
  challenge: CodeChallengeDataFragment,
) => {
  const { challengeMeta, startingCode } = challenge;
  const storedCode = getStoredCodeFromCompletionData({});

  if (!challenge) {
    return '';
  } else if (storedCode) {
    return storedCode;
  } else if (startingCode) {
    return startingCode;
  } else if (challengeMeta?.difficulty === 'hard') {
    return 'This is a hard challenge. Expect to struggle. TODO: Add more text to this and improve the message';
  }

  return '';
};

// need to properly type test results once things get solidified
export const hasPassedCodeChallenge = (
  tests: CodeChallengeTests,
  testResults: unknown[],
) =>
  !tests ||
  tests.length === 0 ||
  // if testResults.length and there are tests, that means the tests haven't ran yet
  (testResults.length !== 0 && testResults.every(({ pass }) => pass));

export const useCodeChallengeTests = (tests: CodeChallengeTests) => {
  const codeEditorValue = useGetStoredCodeFromCompletionData();
  const testResultsValue = useReactiveVar(testResultsVar);

  /*
   * necessary when runTests is run immediately after a codeEditorValue changes
   */
  const codeEditorValueRef = useRef(codeEditorValue);
  codeEditorValueRef.current = codeEditorValue;

  // TODO: extract runTests property to a function for easier testing
  const handleRunTests = async () => {
    const results = await runTests(codeEditorValueRef.current, tests);
    testResultsVar(results);

    hasPassedCodeChallenge(tests, results) ? passChallenge() : failChallenge();
  };

  return {
    runTests: handleRunTests,
    testResults: testResultsValue,
  };
};
