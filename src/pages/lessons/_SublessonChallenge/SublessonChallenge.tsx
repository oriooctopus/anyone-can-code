import { useReactiveVar } from '@apollo/client';
import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import TestCaseResult from 'components/TestCaseResult/TestCaseResult';
import { FlText } from 'components/Typography/FlText';
import { codeEditorValueVar } from 'src/cache';
import { runTests } from 'src/CodeRunning';
import { ChallengeDataFragment } from 'src/generated/graphql';

type SublessonChallengeProps = {
  challenge: ChallengeDataFragment;
};

export const SublessonChallenge = ({
  challenge,
}: SublessonChallengeProps) => {
  return (
    <Box my="15px">
      <Text size="16" fontWeight="bold" mb="5px">
        Challenge
      </Text>
      <Challenge challenge={challenge}
    </Box>
  );
};
