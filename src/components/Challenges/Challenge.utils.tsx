import { useState, useEffect, useCallback, useRef } from 'react';
import { ChallengeProps } from 'components/Challenges/Challenge.types';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { runTests } from 'src/CodeRunning';
import { useReactiveVar } from '@apollo/client';
import { Button, ButtonProps } from '@chakra-ui/button';

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

  const resetTests = () => testResultsVar([]);

  return {
    resetTests,
    runTests: handleRunTests,
    testResults: testResultsValue,
  };
};

// need to properly type test results once things get solidified
export const hasPassedCodeChallenge = (
  tests: CodeChallengeDataFragment['tests'],
  testResults: any[],
) =>
  tests.length === 0 ||
  // if testResults.length and there are tests, that means the tests haven't ran yet
  (testResults.length !== 0 && testResults.every(({ pass }) => pass));

export const ChallengeButton = (props: ButtonProps) => (
  <Button
    px="35px"
    py="25px"
    mt="auto"
    mb="30px"
    colorScheme="green"
    {...props}
  />
);

// export const useMultipleChoice = () => {
//   const [optionSelectionMap, setOptionSelectionMap] = useState([]);
//   const [hasJustAttempted, setHasJustAttempted] = useState(false);

//   const toggleOption = (index: number) => {
//     optionSelectionMap[index] = !!optionSelectionMap[index];
//     setOptionSelectionMap(optionSelectionMap);
//   };

//   const onSubmit = (onSuccess: () => void) => {
//     if ()
//   };

//   return {
//     optionSelectionMap,
//     toggleOption,
//   };
// };
