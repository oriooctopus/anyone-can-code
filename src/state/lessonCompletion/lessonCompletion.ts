import update, { CustomCommands, Spec } from 'immutability-helper';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { ILearningStepCompletionData } from 'src/state/lessonCompletion/lessonCompletion.types';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';

/**
 * helper for modifying the data of the current challenge within
 * the lessonCompletionData. This could be modified in the future
 * to take in a challengeIndex if necessary
 * @param spec pass in the spec for the modification of the challenge data
 */
export const updateLearningStepCompletionData = <
  C extends CustomCommands<object> = never,
>(
  spec: Spec<ILearningStepCompletionData, C>,
) => {
  const lessonCompletionData = lessonCompletionDataVar();
  const currentSublessonIndex = currentSublessonIndexVar();
  const currentChallengeIndex = currentChallengeIndexVar();

  const updateSpec =
    currentChallengeIndex === -1
      ? {
          introduction: spec,
        }
      : {
          challenges: {
            [currentChallengeIndex]: spec,
          },
        };

  // @ts-expect-error will fix later. Interesting that when I forget to include challenges it had no error
  const newLessonCompletionData = update(lessonCompletionData, {
    [currentSublessonIndex]: updateSpec,
  });
  lessonCompletionDataVar(newLessonCompletionData);
};

export const updateSublessonIntroductionCompletion = (
  sublessonIndex: number,
  introductionCompletion: boolean,
) => {
  const lessonCompletionData = lessonCompletionDataVar();

  const newLessonCompletionData = update(lessonCompletionData, {
    [sublessonIndex]: {
      introduction: {
        completed: {
          $set: introductionCompletion,
        },
      },
    },
  });

  lessonCompletionDataVar(newLessonCompletionData);
};

export const updateCurrentEditorValue = (value: string) => {
  updateLearningStepCompletionData({
    code: {
      $set: value,
    },
  });
};
