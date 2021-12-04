import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { MultipleChoiceChallengeDataFragment } from 'src/generated/graphql';
import { failChallenge, passChallenge } from 'src/state/challenge/challenge';
import { challengeAttemptStatusVar } from 'src/state/challenge/challenge.reactiveVariables';
import { ChallengeAttemptStatusEnum } from 'src/state/challenge/challenge.types';
import { multipleChoiceOptionSelectionsVar } from 'src/state/challenge/multipleChoiceChallenge/multipleChoiceChallenge.reactiveVariables';
import {
  ChallengeButton,
  ChallengeMarkdown,
} from 'components/Challenges/Challenge.styles';
import { MultipleChoiceChallengeOption } from 'components/Challenges/MultipleChoiceChallenge/MultipleChoiceChallengeOption';

type props = {
  challenge: MultipleChoiceChallengeDataFragment;
  nextButtonText: string;
  onClickNext: () => void;
};

export const MultipleChoiceChallenge = ({
  challenge: {
    canSelectMultipleOptions,
    id,
    options = [],
    prompt,
    useMarkdownForOptionsText,
  },
  nextButtonText,
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

    isSubmissionCorrect ? passChallenge() : failChallenge();
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
          <ChallengeButton onClick={onClickNext}>
            {nextButtonText}
          </ChallengeButton>
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
