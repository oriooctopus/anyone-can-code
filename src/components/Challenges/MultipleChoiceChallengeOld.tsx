import { useReactiveVar } from '@apollo/client';
import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import Markdown from 'components/Markdown/Markdown';
import {
  challengeAttemptStatusVar,
  ChallengeAttemptStatusEnum,
  multipleChoiceOptionSelectionsVar,
} from 'src/cache';
import { MultipleChoiceChallengeDataFragment } from 'src/generated/graphql';
import { funky } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export type props = {
  challenge: MultipleChoiceChallengeDataFragment;
};

export const MultipleChoiceChallenge = ({
  challenge: { options, prompt },
}: props) => {
  const optionSelections = useReactiveVar(multipleChoiceOptionSelectionsVar);
  const challengeAttemptStatus = useReactiveVar(challengeAttemptStatusVar);

  const onClickOption = (index: number) => {
    console.log('currently', challengeAttemptStatus);
    challengeAttemptStatusVar(ChallengeAttemptStatusEnum.notAttempted);
    multipleChoiceOptionSelectionsVar({
      ...optionSelections,
      [index]: !optionSelections[index],
    });
  };

  const isOptionSelected = (index: number) => Boolean(optionSelections[index]);

  return (
    <Box color="white" textAlign="center" p={10}>
      <Markdown codeTheme={funky}>{prompt}</Markdown>
      {options.map(({ text }, index) => (
        <Button
          w="100%"
          bgColor="color"
          color="black"
          mt={5}
          py={isOptionSelected(index) ? '20px' : '26px'}
          d="flex"
          outline="none"
          borderColor="darkgreen"
          // borderSize={isOptionSelected(index) ? 6 : 0}
          borderWidth={isOptionSelected(index) ? '6px' : 0}
          onClick={() => onClickOption(index)}
          // border="5px solid green"
        >
          {text}
        </Button>
      ))}
      {challengeAttemptStatus === ChallengeAttemptStatusEnum.passed && (
        <Text color="green">Correct!</Text>
      )}
      {challengeAttemptStatus === ChallengeAttemptStatusEnum.failed && (
        <Text color="red">Incorrect. Try again</Text>
      )}
    </Box>
  );
};
