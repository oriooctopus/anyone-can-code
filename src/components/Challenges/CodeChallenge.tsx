// import { CodeChallengeProps } from 'components/Challenges/Challenge.types';
import { Button, ButtonProps } from '@chakra-ui/button';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';
import { FlText } from 'components/Typography/FlText';
import {
  ChallengeButton,
  hasPassedCodeChallenge,
  useCodeChallengeTests,
} from 'components/Challenges/Challenge.utils';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { useReactiveVar } from '@apollo/client';
import { CodeChallengeDataFragment } from 'src/generated/graphql';

export type CodeChallengeProps = {
  challenge: CodeChallengeDataFragment;
  onClickNext: () => void;
};

export const CodeChallenge = ({
  challenge: { tests, prompt, startingCode },
  onClickNext,
}: CodeChallengeProps) => {
  const { resetTests, runTests, testResults } = useCodeChallengeTests(tests);
  const resetCode = () => {
    codeEditorValueVar(startingCode);
    resetTests();
  };
  const testResultsValue = useReactiveVar(testResultsVar);

  const canProceed = hasPassedCodeChallenge(tests, testResultsValue);

  return (
    <>
      <Box mt="15px" />
      <FlText variant="regularBody">{prompt}</FlText>
      {tests?.map(({ label }, index) => (
        <TestCaseResult
          passed={testResults[index]?.pass}
          label={label}
          key={label}
        />
      ))}
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

        <ChallengeButton colorScheme="red" onClick={resetCode}>
          {/* make this button less prominent */}
          Reset
        </ChallengeButton>
      </Flex>
    </>
  );
};
