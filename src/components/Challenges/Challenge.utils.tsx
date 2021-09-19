import { ChallengeProps } from 'components/Challenges/Challenge.types';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { runTests } from 'src/CodeRunning';
import { useReactiveVar } from '@apollo/client';

export const getChallengeType = (challenge: ChallengeProps['challenge']) => {};

export const useCodeChallengeTests = (
  tests: CodeChallengeDataFragment['tests'],
) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const testResultsValue = useReactiveVar(testResultsVar);

  // const internalTests = tests.map(({ internalTest }) => internalTest);
  // console.log('tests', tests, 'internalTests', internalTests);

  // TODO: extract runTests property to a function for easier testing
  const handleRunTests = async () => {
    console.log('does this run?');
    const results = await runTests(codeEditorValue, tests);
    testResultsVar(results);
  };

  return {
    runTests: async () => await handleRunTests(),
    testResults: testResultsValue,
  };
};
