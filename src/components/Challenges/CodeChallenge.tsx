// import { CodeChallengeProps } from 'components/Challenges/Challenge.types';
import { Button, ButtonProps } from '@chakra-ui/button';
import { Box, HStack } from '@chakra-ui/layout';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';
import { FlText } from 'components/Typography/FlText';
import {
  hasPassedCodeChallenge,
  useCodeChallengeTests,
} from 'components/Challenges/Challenge.utils';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { useReactiveVar } from '@apollo/client';
import { CodeChallengeDataFragment } from 'src/generated/graphql';

const CodeChallengeButton = (props: ButtonProps) => (
  <Button px="35px" py="25px" {...props} />
);

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
    <Box>
      <FlText variant="regularBody">{prompt}</FlText>
      {tests?.map(({ label }, index) => (
        <TestCaseResult
          passed={testResults[index]?.pass}
          label={label}
          key={label}
        />
      ))}
      <HStack spacing={6} mt="40px" mb="15px">
        {canProceed ? (
          <CodeChallengeButton colorScheme="green" onClick={onClickNext}>
            Next
          </CodeChallengeButton>
        ) : (
          <CodeChallengeButton colorScheme="green" onClick={runTests}>
            Run Tests
          </CodeChallengeButton>
        )}

        <CodeChallengeButton colorScheme="red" onClick={resetCode}>
          Reset
        </CodeChallengeButton>
      </HStack>
    </Box>
  );
};
