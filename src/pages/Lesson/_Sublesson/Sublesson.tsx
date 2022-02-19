import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import '@fontsource/roboto';
import React, { useEffect } from 'react';
import { SublessonDataFragment } from 'src/generated/graphql';
import {
  parseSublessonSteps,
  isSublessonIntroduction,
  useSublessonNavigation,
} from 'src/pages/Lesson/_Sublesson/Sublesson.utils';
import { contentPanelScrollToTopFunctionVar } from 'src/state/general/general.reactiveVariables';
import { updateCurrentEditorValue } from 'src/state/lessonCompletion/lessonCompletion';
import { currentStepIndexVar } from 'src/state/step/step.reactiveVariables';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { getSublessonStartingCode } from 'src/state/sublesson/sublesson.utils';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { ContentPanel } from 'components/ContentPanel/ContentPanel';
import Markdown from 'components/Markdown/Markdown';
import { Step } from 'components/Step/Step';
import { StepButton } from 'components/Step/Step.styles';

type props = {
  sublesson: FlattenStrapi<SublessonDataFragment>;
  totalSublessons: number;
  /*
   * When a user presses 'go back' at the beginning of a sublesson,
   * they go to the end of the previous sublesson
   */
  lastStepIndexOfPreviousSublesson: number | undefined;
};

export const Sublesson = React.memo(
  ({ lastStepIndexOfPreviousSublesson, sublesson, totalSublessons }: props) => {
    const currentStepIndex = useReactiveVar(currentStepIndexVar);
    const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
    const contentPanelScrollToTopFunction = useReactiveVar(
      contentPanelScrollToTopFunctionVar,
    );
    const { isEndOfLesson, onClickNext } = useSublessonNavigation({
      sublesson,
      totalSublessons,
    });

    const { steps, description, name, lesson } = sublesson;

    // probably should just be something like parseSublessonSteps
    const parsedSteps = parseSublessonSteps(steps);
    const currentStep = parsedSteps[currentStepIndex];
    const nextButtonText = isEndOfLesson ? 'Go to next lesson' : 'Next';
    const isIntroduction = isSublessonIntroduction(currentStepIndex);

    const showGoBackIndicator = !isIntroduction || currentSublessonIndex !== 0;

    const sublessonIntroductionText = (
      <>
        <Text fontSize="26px">{name}</Text>
        <Markdown containerOverrides={{ mb: '35px', mt: '10px' }}>
          {description}
        </Markdown>

        {isIntroduction && (
          // could probably have a better name
          <StepButton onClick={onClickNext}>
            {steps?.length ? 'Begin' : nextButtonText}
          </StepButton>
        )}
      </>
    );

    const onGoBack = () => {
      if (isIntroduction) {
        currentSublessonIndexVar(currentSublessonIndex - 1);
        currentStepIndexVar(lastStepIndexOfPreviousSublesson);
      } else {
        currentStepIndexVar(currentStepIndex - 1);
      }
    };

    useEffect(() => {
      updateCurrentEditorValue(getSublessonStartingCode());
    }, [sublesson.id]);

    useEffect(contentPanelScrollToTopFunction, [sublesson.id, currentStep?.id]);

    return (
      <ContentPanel
        onGoBack={showGoBackIndicator ? onGoBack : undefined}
        secondaryContent={!isIntroduction && sublessonIntroductionText}
      >
        <>
          <Text fontSize="13px" textTransform="uppercase">
            {lesson?.name}
          </Text>
          {isIntroduction ? (
            sublessonIntroductionText
          ) : (
            <Step
              step={parsedSteps[currentStepIndex]}
              onClickNext={onClickNext}
              nextButtonText={nextButtonText}
            />
          )}
        </>
      </ContentPanel>
    );
  },
);

Sublesson.displayName = 'Sublesson';
