import { useReactiveVar } from '@apollo/client';
import { useRef } from 'react';
import { runTests } from 'src/codeRunning/codeRunning';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { codeEditorValueVar } from 'src/state/general';
import { CodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.types';

export const getCodeChallengeStartingCode = (
  challenge: CodeChallengeDataFragment,
) => {
  const { challengeMeta, startingCode } = challenge;

  if (!challenge) {
    return '';
  }

  if (startingCode) {
    return startingCode;
  } else if (challengeMeta?.difficulty === 'hard') {
    return 'This is a hard challenge. Expect to struggle. TODO: Add more text to this and improve the message';
  }

  return '';
};

// need to properly type test results once things get solidified
export const hasPassedCodeChallenge = (
  tests: CodeChallengeTests,
  testResults: any[],
) =>
  !tests ||
  tests.length === 0 ||
  // if testResults.length and there are tests, that means the tests haven't ran yet
  (testResults.length !== 0 && testResults.every(({ pass }) => pass));

export const useCodeChallengeTests = (tests: CodeChallengeTests) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const testResultsValue = useReactiveVar(testResultsVar);

  /*
   * necessary when runTests is run immediately after a codeEditorValue changes
   */
  const codeEditorValueRef = useRef(codeEditorValue);
  codeEditorValueRef.current = codeEditorValue;

  // TODO: extract runTests property to a function for easier testing
  const handleRunTests = async () => {
    const results = await runTests(codeEditorValueRef.current, tests);
    console.log('results', results);
    testResultsVar(results);
  };

  return {
    runTests: handleRunTests,
    testResults: testResultsValue,
  };
};
