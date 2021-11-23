import { useReactiveVar } from '@apollo/client';
import { Button } from '@chakra-ui/button';
import { Box, Divider, Flex,Text } from '@chakra-ui/layout';
import { Heading, VStack,HStack } from '@chakra-ui/react';
import Restart from './src/assets/Restart.svg';
import { useEffect } from 'react';
import { codeEditorValueVar, testResultsVar } from 'src/cache';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { ChallengeHints } from 'components/ChallengeHints/ChallengeHints';
import {
  ChallengeButton,
  ChallengeMarkdown,
} from 'components/Challenges/Challenge.styles';
import {
  getCodeChallengeStartingCode,
  hasPassedCodeChallenge,
  useCodeChallengeTests,
} from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';

export type CodeChallengeProps = {
  challenge: CodeChallengeDataFragment;
  onClickNext: () => void;
};

export const CodeChallenge = ({
  challenge,
  onClickNext,
}: CodeChallengeProps) => {
  const { id, hints, tests, prompt } = challenge;
  const { runTests } = useCodeChallengeTests(tests);
  const resetChallenge = () => {
    codeEditorValueVar(getCodeChallengeStartingCode(challenge));
    testResultsVar([]);
  };
  const testResultsValue = useReactiveVar(testResultsVar);
  const canProceed = hasPassedCodeChallenge(tests, testResultsValue);
  const showHints = Boolean(hints?.length);

  useEffect(resetChallenge, [id]);

  return (
    <>
      <Box mt="15px" />
      {/* we give text flex grow so that the tests are on the bottom */}
      <ChallengeMarkdown containerOverrides={{ flexGrow: 1 }}>
        {prompt}
      </ChallengeMarkdown>
      <Box mb="20px" w="100%">
        {showHints ? <ChallengeHints hints={hints} /> : <Divider opacity={1} />}
        <Tests tests={tests} />
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

        <ChallengeButton
          colorScheme="red"
          onClick={resetChallenge}
          variant="ghost"
        >
          <HStack>
            <Restart/>
            <Text>Reset Code</Text>
          </HStack>
        </ChallengeButton>
      </Flex>
    </>
  );
};

interface ITestsProps {
  tests: CodeChallengeProps['challenge']['tests'];
}

const Tests: React.FC<ITestsProps> = ({ tests }) => {
  const { testResults } = useCodeChallengeTests(tests);

  return (
    <Box>
      <Heading size="md" mr="auto" my="23px">
        Tests
      </Heading>
      <VStack spacing="12px" align="left">
        {tests?.map(({ label }, index) => (
          <TestCaseResult
            passed={testResults[index]?.pass}
            label={label}
            key={label}
          />
        ))}
      </VStack>
    </Box>
  );
};
