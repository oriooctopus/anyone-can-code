import { CodeChallengeProps } from 'components/Challenges/Challenge.types';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';
import { FlText } from 'components/Typography/FlText';
import { useCodeChallengeTests } from 'components/Challenges/Challenge.utils';

export const CodeChallenge = ({
  challenge: { tests, prompt },
}: CodeChallengeProps) => {
  const { runTests, testResults } = useCodeChallengeTests(tests);

  return (
    <Box>
      <FlText variant="regularBody">{prompt}</FlText>
      {tests?.map(({ label }, index) => (
        <TestCaseResult passed={testResults[index]?.pass} label={label} />
      ))}
      <Button
        colorScheme="green"
        px="35px"
        py="25px"
        mt="40px"
        mb="15px"
        onClick={runTests}
      >
        Next
      </Button>
    </Box>
  );
};
