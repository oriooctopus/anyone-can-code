import { useReactiveVar } from '@apollo/client';
import { LessonSidebarDataFragment } from 'src/generated/graphql';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { ISublessonCompletionData } from 'src/state/lessonCompletion/lessonCompletion.types';
import { setStepIndex } from 'src/state/step/step';
import { currentStepIndexVar } from 'src/state/step/step.reactiveVariables';
import { setSublessonIndex } from 'src/state/sublesson/sublesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { ProgressStateEnum } from 'src/types/generalTypes';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { IProgressStepperStep } from 'components/ProgressStepper/ProgressStepper';

const isSublessonComplete = (sublessonCompletion: ISublessonCompletionData) => {
  return (
    sublessonCompletion.introduction.completed &&
    sublessonCompletion.steps?.every(({ completed }) => completed)
  );
};

const useGetLessonCompletionProgressStates = () => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentStepIndex = useReactiveVar(currentStepIndexVar);
  const lessonCompletionData = useReactiveVar(lessonCompletionDataVar);

  const allSublessonCompletions = lessonCompletionData.map(
    (_sublesson, sublessonIndex) => {
      if (sublessonIndex === currentSublessonIndex) {
        return ProgressStateEnum.CURRENT;
      }

      return isSublessonComplete(lessonCompletionData?.[sublessonIndex])
        ? ProgressStateEnum.COMPLETE
        : ProgressStateEnum.INCOMPLETE;
    },
  );

  const currentSublessonStepCompletions =
    lessonCompletionData[currentSublessonIndex]?.steps?.map(
      ({ completed }, stepIndex) => {
        if (stepIndex === currentStepIndex) {
          return ProgressStateEnum.CURRENT;
        }

        return completed
          ? ProgressStateEnum.COMPLETE
          : ProgressStateEnum.INCOMPLETE;
      },
    ) || [];
  const currentSublessonIntroductionCompletion =
    currentStepIndex === -1
      ? ProgressStateEnum.CURRENT
      : lessonCompletionData?.[currentSublessonIndex].introduction.completed
      ? ProgressStateEnum.COMPLETE
      : ProgressStateEnum.INCOMPLETE;
  const currentSublessonCompletion = {
    steps: currentSublessonStepCompletions,
    introduction: currentSublessonIntroductionCompletion,
  };

  return {
    allSublessonCompletions,
    currentSublessonCompletion,
  };
};

export const useGetLessonSidebarProgressStepperData = (
  sublessons: Array<FlattenStrapi<LessonSidebarDataFragment>>,
) => {
  const { allSublessonCompletions, currentSublessonCompletion } =
    useGetLessonCompletionProgressStates();

  const sublessonIntroductionStep: IProgressStepperStep = {
    hoverText: 'Introduction',
    onClick: () => setStepIndex(-1),
    state: currentSublessonCompletion.introduction,
  };
  const currentSublessonStepStepperData = currentSublessonCompletion.steps.map(
    (_step, stepIndex) => ({
      // probably need to tweak this because it probaby works but is weird now. I guess it does make sense though as a combination of 0-indexing and the sublesson text
      hoverText: `Step ${stepIndex + 2}`,
      onClick: () => setStepIndex(stepIndex),
      state: currentSublessonCompletion.steps?.[stepIndex],
    }),
  );

  const allSublessonsStepperData = sublessons.map(
    ({ name }, sublessonIndex) => ({
      onClick: () => setSublessonIndex(sublessonIndex),
      hoverText: name,
      state: allSublessonCompletions[sublessonIndex],
    }),
  );
  const currentSublessonStepperData = [
    sublessonIntroductionStep,
    ...currentSublessonStepStepperData,
  ];

  return {
    allSublessonsStepperData,
    currentSublessonStepperData,
  };
};
