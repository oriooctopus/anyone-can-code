import update, { CustomCommands, Spec } from 'immutability-helper';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { ILearningStepCompletionData } from 'src/state/lessonCompletion/lessonCompletion.types';
import { currentStepIndexVar } from 'src/state/step/step.reactiveVariables';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';

/**
 * helper for modifying the data of the current step within
 * the lessonCompletionData. This could be modified in the future
 * to take in a stepIndex if necessary
 * @param spec pass in the spec for the modification of the step data
 */
export const updateLearningStepCompletionData = <
  C extends CustomCommands<object> = never,
>(
  spec: Spec<ILearningStepCompletionData, C>,
) => {
  const lessonCompletionData = lessonCompletionDataVar();
  const currentSublessonIndex = currentSublessonIndexVar();
  const currentStepIndex = currentStepIndexVar();

  const updateSpec =
    currentStepIndex === -1
      ? {
          introduction: spec,
        }
      : {
          steps: {
            [currentStepIndex]: spec,
          },
        };

  // @ts-expect-error will fix later. Interesting that when I forget to include steps it had no error
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
