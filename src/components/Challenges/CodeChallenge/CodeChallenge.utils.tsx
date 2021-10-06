import { useReactiveVar } from '@apollo/client';
import { useRef } from 'react';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { runTests } from 'src/codeRunning/codeRunning';
import { CodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.types';

// need to properly type test results once things get solidified
export const hasPassedCodeChallenge = (
  tests: CodeChallengeTests,
  testResults: any[],
) =>
  tests.length === 0 ||
  // if testResults.length and there are tests, that means the tests haven't ran yet
  (testResults.length !== 0 && testResults.every(({ pass }) => pass));

export const useCodeChallengeTests = (tests: CodeChallengeTests) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const testResultsValue = useReactiveVar(testResultsVar);

  /*
   * necessary when runTests is run immedietely after a codeEditorValue changes
   */
  const codeEditorValueRef = useRef(codeEditorValue);
  codeEditorValueRef.current = codeEditorValue;

  // TODO: extract runTests property to a function for easier testing
  const handleRunTests = async () => {
    const results = await runTests(codeEditorValueRef.current, tests);
    testResultsVar(results);
  };

  return {
    runTests: handleRunTests,
    testResults: testResultsValue,
  };
};
