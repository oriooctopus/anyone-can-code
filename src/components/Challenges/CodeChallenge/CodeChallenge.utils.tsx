import { useReactiveVar } from '@apollo/client';
import { useRef } from 'react';
import { runTests } from 'src/codeRunning/codeRunning';
import { TTestResult } from 'src/codeRunning/codeRunning.types';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { lessonCompletionDataType } from 'src/state/lessonCompletion/lessonCompletion.types';
import { failChallenge, passChallenge } from 'src/state/step/step';
import { currentStepIndexVar } from 'src/state/step/step.reactiveVariables';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { CodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.types';

type TGetLearningStepCompletionData = {
  stepIndex?: number;
  sublessonIndex?: number;
  lessonCompletionData?: lessonCompletionDataType;
};

export const getLearningStepCompletionData = ({
  stepIndex = currentStepIndexVar(),
  sublessonIndex = currentSublessonIndexVar(),
  lessonCompletionData = lessonCompletionDataVar(),
}: TGetLearningStepCompletionData) => {
  const { steps, introduction } = lessonCompletionData[sublessonIndex] || {};

  if (stepIndex === -1) {
    return introduction;
  }

  return steps?.[stepIndex];
};

export const getStoredCodeFromLastChallengeData = () => {
  const stepIndex = currentStepIndexVar();

  if (stepIndex === 0) {
    throw new Error(
      'Attempted to get stored code from previous challenge, but this is the first challenge.',
    );
  }

  return getLearningStepCompletionData({
    stepIndex: stepIndex - 1,
  })?.code;
};

export const useGetLearningStepCompletionData = () => {
  const currentStepIndex = useReactiveVar(currentStepIndexVar);
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const lessonCompletionData = useReactiveVar(lessonCompletionDataVar);

  return getLearningStepCompletionData({
    stepIndex: currentStepIndex,
    sublessonIndex: currentSublessonIndex,
    lessonCompletionData,
  });
};

// need to properly type test results once things get solidified
export const hasPassedCodeChallenge = (
  tests: CodeChallengeTests,
  testResults: TTestResult[],
) =>
  !tests ||
  tests.length === 0 ||
  // if testResults.length and there are tests, that means the tests haven't ran yet
  (testResults.length !== 0 && testResults.every(({ pass }) => pass));

export const useCodeChallengeTests = (tests: CodeChallengeTests) => {
  const { code: codeEditorValue } = useGetLearningStepCompletionData();
  const testResultsValue = useReactiveVar(testResultsVar);

  /*
   * necessary when runTests is run immediately after a codeEditorValue changes
   */
  const codeEditorValueRef = useRef(codeEditorValue);
  codeEditorValueRef.current = codeEditorValue;

  // TODO: extract runTests property to a function for easier testing
  const handleRunTests = async () => {
    // TODO: this is a bit messy that I need to pass in ''
    const results = await runTests(codeEditorValueRef.current || '', tests);
    testResultsVar(results);

    hasPassedCodeChallenge(tests, results) ? passChallenge() : failChallenge();
  };

  return {
    runTests: handleRunTests,
    testResults: testResultsValue,
  };
};
