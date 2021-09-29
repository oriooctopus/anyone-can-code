import { useEffect } from 'react';
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

  const isOptionCorrect = (index: number) =>
    Boolean(options[index].isCorrect) === Boolean(optionSelections[index]);

  const shouldShowOptionIncorrectExplanation = (index: number) =>
    challengeAttemptStatus === ChallengeAttemptStatusEnum.failed &&
    options[index].incorrectChoiceExplanation &&
    !isOptionCorrect(index);

  useEffect(() => {
    multipleChoiceOptionSelectionsVar([]);
  }, []);

  const onSubmit = () => {
    const isSubmissionCorrect = options.every((_, index) =>
      isOptionCorrect(index),
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
      {options.map(({ incorrectChoiceExplanation, text }, index) => (
        <Box mb={index === 0 ? '10px' : '20px'} w="100%">
          <Button
            w="100%"
            bgColor="#192A4E"
            color="white"
            colorScheme="darkblue"
            py={isOptionSelected(index) ? '20px' : '26px'}
            d="flex"
            outline="none"
            borderColor="lightblue"
            borderWidth={isOptionSelected(index) ? '6px' : 0}
            onClick={() => onClickOption(index)}
            key={text}
          >
            {text}
          </Button>
          {shouldShowOptionIncorrectExplanation(index) && (
            <Text color="red" fontSize="14px">
              {incorrectChoiceExplanation}
            </Text>
          )}
        </Box>
      ))}
      <Box mt="auto" position="relative" width="100%">
        {hasUserPassed ? (
          <ChallengeButton onClick={onClickNext}>Next</ChallengeButton>
        ) : (
          <ChallengeButton onClick={onSubmit}>Submit</ChallengeButton>
        )}
        {challengeAttemptStatus === ChallengeAttemptStatusEnum.passed && (
          <Text color="green" fontSize="14px" position="absolute" top="53px">
            Correct!
          </Text>
        )}
        {challengeAttemptStatus === ChallengeAttemptStatusEnum.failed && (
          <Text color="red" fontSize="14px" position="absolute" top="53px">
            Incorrect. Try again
          </Text>
        )}
      </Box>
    </>
  );
};
