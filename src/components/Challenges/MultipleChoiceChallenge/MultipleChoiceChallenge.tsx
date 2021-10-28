import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import {
  multipleChoiceOptionSelectionsVar,
  challengeAttemptStatusVar,
  ChallengeAttemptStatusEnum,
} from 'src/cache';
import { MultipleChoiceChallengeDataFragment } from 'src/generated/graphql';
import {
  ChallengeButton,
  ChallengeMarkdown,
} from 'components/Challenges/Challenge.styles';
import { MultipleChoiceChallengeOption } from 'components/Challenges/MultipleChoiceChallenge/MultipleChoiceChallengeOption';
import Markdown from 'components/Markdown/Markdown';

type props = {
  onClickNext: () => void;
  challenge: MultipleChoiceChallengeDataFragment;
};

export const MultipleChoiceChallenge = ({
  challenge: {
    canSelectMultipleOptions,
    id,
    options = [],
    prompt,
    useMarkdownForOptionsText,
  },
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
  // TODO: Give the user a way to cancel the automatic moving on
  useEffect(() => {
    if (hasUserPassed) {
      // this shouldn't be called onClickNext if it doesn't happen on click
      setTimeout(onClickNext, 2000);
    }
  }, [challengeAttemptStatus]);

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
      <ChallengeMarkdown>{prompt}</ChallengeMarkdown>
      {options.map(({ incorrectChoiceExplanation, text }, index) => (
        <MultipleChoiceChallengeOption
          text={text}
          incorrectChoiceExplanation={incorrectChoiceExplanation}
          isOptionSelected={isOptionSelected(index)}
          onClickOption={() => onClickOption(index)}
          showOptionIncorrectExplanation={shouldShowOptionIncorrectExplanation(
            index,
          )}
          useMarkdown={useMarkdownForOptionsText}
          key={text}
        />
      ))}
      <Box mt="auto" position="relative" width="100%">
        {hasUserPassed ? (
          <ChallengeButton onClick={onClickNext}>Next</ChallengeButton>
        ) : (
          <ChallengeButton onClick={onSubmit}>Submit</ChallengeButton>
        )}
        {challengeAttemptStatus === ChallengeAttemptStatusEnum.passed && (
          <Text color="green" fontSize="14px" position="absolute" top="53px">
            Correct! Moving on...
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
