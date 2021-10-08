import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import { Box, Button, Divider } from '@chakra-ui/react';
import { useEffect } from 'react';
import {
  multipleChoiceOptionSelectionsVar,
  challengeAttemptStatusVar,
  ChallengeAttemptStatusEnum,
  currentChallengeIndexVar,
} from 'src/cache';
import { MultipleChoiceChallengeDataFragment } from 'src/generated/graphql';
import { ChallengeButton } from 'components/Challenges/Challenge.styles';
import Markdown from 'components/Markdown/Markdown';

type props = {
  onClickNext: () => void;
  challenge: MultipleChoiceChallengeDataFragment;
};

export const MultipleChoiceChallenge = ({
  challenge: { canSelectMultipleOptions, id, options, prompt },
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
  }, [id]);

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
        // this should definitely be its own component
        <Box
          mb={shouldShowOptionIncorrectExplanation(index) ? '5px' : '15px'}
          w="100%"
        >
          <Button
            w="100%"
            bgColor={isOptionSelected(index) ? '#192A4E' : '#F4F2F0'}
            color={isOptionSelected(index) ? 'white' : 'black'}
            _hover={{ color: isOptionSelected(index) ? 'white' : 'black' }}
            py="22px"
            fontWeight="normal"
            d="flex"
            outline="none"
            border="1px solid #6A6A6A"
            onClick={() => onClickOption(index)}
            key={text}
          >
            {text}
          </Button>
          {shouldShowOptionIncorrectExplanation(index) && (
            <Text color="red" fontSize="14px" mt="2px">
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
