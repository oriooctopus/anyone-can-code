import { useReactiveVar } from '@apollo/client';
import { LessonSidebarDataFragment } from 'src/generated/graphql';
import { setChallengeIndex } from 'src/state/challenge/challenge';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { ISublessonCompletionData } from 'src/state/lessonCompletion/lessonCompletion.types';
import { setSublessonIndex } from 'src/state/sublesson/sublesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { ProgressStateEnum } from 'src/types/generalTypes';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { IProgressStepperStep } from 'components/ProgressStepper/ProgressStepper';

const isSublessonComplete = (sublessonCompletion: ISublessonCompletionData) => {
  return (
    sublessonCompletion.introduction.completed &&
    sublessonCompletion.challenges?.every(({ completed }) => completed)
  );
};

const useGetLessonCompletionProgressStates = () => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
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

  const currentSublessonChallengeCompletions =
    lessonCompletionData[currentSublessonIndex]?.challenges?.map(
      ({ completed }, challengeIndex) => {
        if (challengeIndex === currentChallengeIndex) {
          return ProgressStateEnum.CURRENT;
        }

        return completed
          ? ProgressStateEnum.COMPLETE
          : ProgressStateEnum.INCOMPLETE;
      },
    ) || [];
  const currentSublessonIntroductionCompletion =
    currentChallengeIndex === -1
      ? ProgressStateEnum.CURRENT
      : lessonCompletionData?.[currentSublessonIndex].introduction.completed
      ? ProgressStateEnum.COMPLETE
      : ProgressStateEnum.INCOMPLETE;
  const currentSublessonCompletion = {
    challenges: currentSublessonChallengeCompletions,
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
    onClick: () => setChallengeIndex(-1),
    state: currentSublessonCompletion.introduction,
  };
  const currentSublessonChallengeStepperData =
    currentSublessonCompletion.challenges.map((_challenge, challengeIndex) => ({
      hoverText: `Challenge ${challengeIndex + 1}`,
      onClick: () => setChallengeIndex(challengeIndex),
      state: currentSublessonCompletion.challenges?.[challengeIndex],
    }));

  const allSublessonsStepperData = sublessons.map(
    ({ name }, sublessonIndex) => ({
      onClick: () => setSublessonIndex(sublessonIndex),
      hoverText: name,
      state: allSublessonCompletions[sublessonIndex],
    }),
  );
  const currentSublessonStepperData = [
    sublessonIntroductionStep,
    ...currentSublessonChallengeStepperData,
  ];

  return {
    allSublessonsStepperData,
    currentSublessonStepperData,
  };
};
