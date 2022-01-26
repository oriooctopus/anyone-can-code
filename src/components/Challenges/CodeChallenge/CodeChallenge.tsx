import { useReactiveVar } from '@apollo/client';
import { Box, Divider, Flex, Text } from '@chakra-ui/layout';
import { Heading, VStack, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import Reset from 'src/assets/Reset.svg';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { getCodeChallengeStartingCode } from 'src/state/challenge/codeChallenge/codeChallenge';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { updateCurrentEditorValue } from 'src/state/lessonCompletion/lessonCompletion';
import { removeEmpty } from 'src/utils/general';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { ChallengeHints } from 'components/ChallengeHints/ChallengeHints';
import {
  ChallengeButton,
  ChallengeMarkdown,
} from 'components/Challenges/Challenge.styles';
import {
  hasPassedCodeChallenge,
  useCodeChallengeTests,
} from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';

export type CodeChallengeProps = {
  challenge: FlattenStrapi<CodeChallengeDataFragment>;
  nextButtonText: string;
  onClickNext: () => void;
};

export const CodeChallenge = ({
  challenge,
  nextButtonText,
  onClickNext,
}: CodeChallengeProps) => {
  const { id, hints, tests, prompt } = challenge;
  const { runTests } = useCodeChallengeTests(tests);
  // I now need to differentiate two functions. Reset challenge which is truly to reset it, and another function to get the when a challenge loads.
  const resetChallenge = (ignoreCurrentChallengeStoredCode?: boolean) => {
    updateCurrentEditorValue(
      getCodeChallengeStartingCode(challenge, ignoreCurrentChallengeStoredCode),
    );
    testResultsVar([]);
  };
  const testResultsValue = useReactiveVar(testResultsVar);
  const canProceed = hasPassedCodeChallenge(tests, testResultsValue);
  const showHints = hints?.length;

  useEffect(resetChallenge, [id]);

  return (
    <>
      <Box mt="15px" />
      {/* we give text flex grow so that the tests are on the bottom */}
      <ChallengeMarkdown containerOverrides={{ flexGrow: 1 }}>
        {prompt}
      </ChallengeMarkdown>
      <Box mb="20px" w="100%">
        {showHints ? (
          <ChallengeHints hints={hints.filter(removeEmpty)} />
        ) : (
          <Divider opacity={1} />
        )}
        <Tests tests={tests} />
      </Box>
      <Flex spacing={6} mt="auto">
        {canProceed ? (
          <ChallengeButton colorScheme="green" onClick={onClickNext} mr="20px">
            {nextButtonText}
          </ChallengeButton>
        ) : (
          <ChallengeButton colorScheme="green" onClick={runTests} mr="20px">
            Run Tests
          </ChallengeButton>
        )}

        <ChallengeButton
          colorScheme="red"
          onClick={() => resetChallenge(true)}
          variant="ghost"
        >
          <HStack spacing="5px">
            <Reset />
            <Text fontWeight="medium">Reset Code</Text>
          </HStack>
        </ChallengeButton>
      </Flex>
    </>
  );
};

interface ITestsProps {
  tests: CodeChallengeProps['challenge']['tests'];
}

const Tests = ({ tests }: ITestsProps) => {
  const { testResults } = useCodeChallengeTests(tests);

  return (
    <Box>
      <Heading size="md" mr="auto" my="23px">
        Tests
      </Heading>
      <VStack spacing="12px" align="left">
        {tests?.filter(removeEmpty).map(({ label }, index) => (
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
