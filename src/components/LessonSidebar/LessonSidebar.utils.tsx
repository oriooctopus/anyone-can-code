import { useReactiveVar } from '@apollo/client';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { ProgressStateEnum } from 'src/types/generalTypes';

export const useGetLessonCompletionProgressStates = () => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const lessonCompletionData = useReactiveVar(lessonCompletionDataVar);
  debugger;

  const sublessonCompletions = lessonCompletionData.map(
    (_sublesson, sublessonIndex) => {
      if (sublessonIndex === currentSublessonIndex) {
        return ProgressStateEnum.CURRENT;
      }

      return lessonCompletionData[sublessonIndex].every(
        ({ completed }) => completed,
      )
        ? ProgressStateEnum.COMPLETE
        : ProgressStateEnum.INCOMPLETE;
    },
  );

  const challengeCompletions = lessonCompletionData.map(
    (challenges, sublessonIndex) =>
      challenges.map(({ completed }, challengeIndex) => {
        if (
          challengeIndex === currentChallengeIndex &&
          sublessonIndex === currentSublessonIndex
        ) {
          return ProgressStateEnum.CURRENT;
        }

        return completed
          ? ProgressStateEnum.COMPLETE
          : ProgressStateEnum.INCOMPLETE;
      }),
  );

  return {
    challengeCompletions,
    sublessonCompletions,
  };
};
