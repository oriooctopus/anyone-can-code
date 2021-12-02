import update, { CustomCommands, Spec } from 'immutability-helper';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { ISublessonCompletionData } from 'src/state/lessonCompletion/lessonCompletion.types';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';

/**
 * helper for modifying the data of the current challenge within
 * the lessonCompletionData
 * @param spec pass in the spec for the modification of the challenge data
 */
export const updateChallengeCompletionData = <
  C extends CustomCommands<object> = never,
>(
  spec: Spec<ISublessonCompletionData, C>,
) => {
  const lessonCompletionData = lessonCompletionDataVar();
  const currentSublessonIndex = currentSublessonIndexVar();
  const currentChallengeIndex = currentChallengeIndexVar();

  // @ts-ignore
  const newLessonCompletionData = update(lessonCompletionData, {
    [currentSublessonIndex]: {
      [currentChallengeIndex]: spec,
    },
  });

  lessonCompletionDataVar(newLessonCompletionData);
};
