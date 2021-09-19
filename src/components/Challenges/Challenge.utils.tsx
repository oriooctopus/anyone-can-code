import { useState, useEffect, useCallback, useRef } from 'react';
import { ChallengeProps } from 'components/Challenges/Challenge.types';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { runTests } from 'src/CodeRunning';
import { useReactiveVar } from '@apollo/client';

export const useCodeChallengeTests = (
  tests: CodeChallengeDataFragment['tests'],
) => {
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
    codeEditorValue,
    testResults: testResultsValue,
  };
};
