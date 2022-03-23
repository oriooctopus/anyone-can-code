import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { MultipleChoiceChallengeDataFragment } from 'src/generated/graphql';
import { multipleChoiceOptionSelectionsVar } from 'src/state/challenge/multipleChoiceChallenge/multipleChoiceChallenge.reactiveVariables';
import { failChallenge, passChallenge } from 'src/state/step/step';
import { challengeAttemptStatusVar } from 'src/state/step/step.reactiveVariables';
import { ChallengeAttemptStatusEnum } from 'src/state/step/step.types';
import { removeEmpty } from 'src/utils/general';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { MultipleChoiceChallengeOption } from 'components/Challenges/MultipleChoiceChallenge/MultipleChoiceChallengeOption';
import { StepButton, StepMarkdown } from 'components/Step/Step.styles';

type props = {
  challenge: FlattenStrapi<MultipleChoiceChallengeDataFragment>;
  nextButtonText: string;
  onClickNext: () => void;
};

export const MultipleChoiceChallenge = ({
  challenge: {
    id,
    canSelectMultipleOptions,
    optionsInitiallyHidden,
    options = [],
    prompt,
  },
  nextButtonText,
  onClickNext,
}: props) => {
  const [showOptions, setShowOptions] = useState(optionsInitiallyHidden);
  const challengeAttemptStatus = useReactiveVar(challengeAttemptStatusVar);
  const optionSelections = useReactiveVar(multipleChoiceOptionSelectionsVar);
  const hasUserPassed =
    challengeAttemptStatus === ChallengeAttemptStatusEnum.passed;

  const isOptionCorrect = (index: number) =>
    Boolean(options?.[index]?.isCorrect) === Boolean(optionSelections[index]);

  const shouldShowOptionIncorrectExplanation = (index: number) =>
    Boolean(
      challengeAttemptStatus === ChallengeAttemptStatusEnum.failed &&
        options?.[index]?.incorrectChoiceExplanation &&
        !isOptionCorrect(index),
    );

  useEffect(() => {
    multipleChoiceOptionSelectionsVar([]);
  }, [id]);

  const onSubmit = () => {
    const isSubmissionCorrect = options?.every((_, index) =>
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
      <StepMarkdown>{prompt}</StepMarkdown>
      {showOptions ? (
        options
          ?.filter(removeEmpty)
          .map(({ incorrectChoiceExplanation, text }, index) => (
            <MultipleChoiceChallengeOption
              text={text}
              incorrectChoiceExplanation={incorrectChoiceExplanation}
              isOptionSelected={isOptionSelected(index)}
              onClickOption={() => onClickOption(index)}
              showOptionIncorrectExplanation={shouldShowOptionIncorrectExplanation(
                index,
              )}
              key={text}
            />
          ))
      ) : (
        <Button
          colorScheme="blue"
          size="md"
          marginBottom="40px"
          onClick={() => setShowOptions(!showOptions)}
        >
          Show options
        </Button>
      )}
      <Box mt="auto" position="relative" width="100%">
        {hasUserPassed ? (
          <StepButton onClick={onClickNext}>{nextButtonText}</StepButton>
        ) : (
          <StepButton onClick={onSubmit}>Submit</StepButton>
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
