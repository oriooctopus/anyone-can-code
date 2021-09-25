import { Text } from '@chakra-ui/layout';
import { useReactiveVar } from '@apollo/client';
import { ChallengeButton } from 'components/Challenges/Challenge.utils';
import {
  multipleChoiceOptionSelectionsVar,
  challengeAttemptStatusVar,
  ChallengeAttemptStatusEnum,
  currentChallengeIndexVar,
} from 'src/cache';
import { MultipleChoiceChallengeDataFragment } from 'src/generated/graphql';
import Markdown from 'components/Markdown/Markdown';
import { Box, Button, Divider } from '@chakra-ui/react';

type props = {
  onClickNext: () => void;
  challenge: MultipleChoiceChallengeDataFragment;
};

export const MultipleChoiceChallengeActions = ({
  challenge: { canSelectMultipleOptions, options, prompt },
  onClickNext,
}: props) => {
  const challengeAttemptStatus = useReactiveVar(challengeAttemptStatusVar);
  const optionSelections = useReactiveVar(multipleChoiceOptionSelectionsVar);
  const hasUserPassed =
    challengeAttemptStatus === ChallengeAttemptStatusEnum.passed;

  const onSubmit = () => {
    const isSubmissionCorrect = options.every(
      ({ isCorrect }, index) => isCorrect === Boolean(optionSelections[index]),
    );

    // it would be nice to abstract this into a util so that the logic is consistent in other places
    challengeAttemptStatusVar(
      isSubmissionCorrect
        ? ChallengeAttemptStatusEnum.passed
        : ChallengeAttemptStatusEnum.failed,
    );
  };

  const onClickOption = (index: number) => {
    console.log('currently', challengeAttemptStatus);
    challengeAttemptStatusVar(ChallengeAttemptStatusEnum.notAttempted);
    if (canSelectMultipleOptions) {
      multipleChoiceOptionSelectionsVar({
        ...optionSelections,
        [index]: !optionSelections[index],
      });
    } else {
      multipleChoiceOptionSelectionsVar({
        [index]: !optionSelections[index],
      });
    }
  };

  const isOptionSelected = (index: number) => Boolean(optionSelections[index]);

  return (
    <>
      <Text fontStyle="italic" opacity="65%" color="black" mb="30px" mt="10px">
        Select the correct option:
      </Text>
      <Markdown mb="20px" fontSize="18px">
        {prompt}
      </Markdown>
      {options.map(({ text }, index) => (
        <Button
          w="100%"
          bgColor="#192A4E"
          color="white"
          colorScheme="darkblue"
          mb="20px"
          py={isOptionSelected(index) ? '20px' : '26px'}
          d="flex"
          outline="none"
          borderColor="lightblue"
          borderWidth={isOptionSelected(index) ? '6px' : 0}
          onClick={() => onClickOption(index)}
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
      {hasUserPassed ? (
        <ChallengeButton onClick={onClickNext}>Next</ChallengeButton>
      ) : (
        <ChallengeButton onClick={onSubmit}>Submit</ChallengeButton>
      )}
    </>
  );
};
