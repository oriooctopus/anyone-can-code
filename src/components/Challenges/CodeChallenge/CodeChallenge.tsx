import { useReactiveVar } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import {
  ChallengeButton,
  ChallengeMarkdown,
} from 'components/Challenges/Challenge.styles';
import {
  hasPassedCodeChallenge,
  useCodeChallengeTests,
} from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import { DEFAULT_EDITOR_STARTING_CODE } from 'components/Editor/Editor.utils';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';

export type CodeChallengeProps = {
  challenge: CodeChallengeDataFragment;
  onClickNext: () => void;
};

export const CodeChallenge = ({
  challenge: { id, tests, prompt, startingCode },
  onClickNext,
}: CodeChallengeProps) => {
  const { runTests, testResults } = useCodeChallengeTests(tests);
  const resetChallenge = () => {
    codeEditorValueVar(startingCode || DEFAULT_EDITOR_STARTING_CODE);
    testResultsVar([]);
  };
  const testResultsValue = useReactiveVar(testResultsVar);
  const canProceed = hasPassedCodeChallenge(tests, testResultsValue);

  useEffect(resetChallenge, [id]);

  return (
    <>
      <Box mt="15px" />
      {/* we give text flex grow so that the tests are on the bottom */}
      <ChallengeMarkdown containerOverrides={{ flexGrow: 1 }}>
        {prompt}
      </ChallengeMarkdown>
      <Box mb="20px">
        {tests?.map(({ label }, index) => (
          <TestCaseResult
            passed={testResults[index]?.pass}
            label={label}
            key={label}
          />
        ))}
      </Box>
      <Flex spacing={6} mt="auto">
        {canProceed ? (
          <ChallengeButton colorScheme="green" onClick={onClickNext} mr="20px">
            Next
          </ChallengeButton>
        ) : (
          <ChallengeButton colorScheme="green" onClick={runTests} mr="20px">
            Run Tests
          </ChallengeButton>
        )}

        <ChallengeButton colorScheme="red" onClick={resetChallenge}>
          {/* make this button less prominent */}
          Reset
        </ChallengeButton>
      </Flex>
    </>
  );
};
