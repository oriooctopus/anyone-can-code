import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { LessonType } from 'src/pages/Lesson/Lesson';
import {
  getStepFromSublessonStep,
  setSublessonIndex,
} from 'src/pages/Lesson/_Sublesson/Sublesson.utils';
import { getCodeChallengeStartingCode } from 'src/state/challenge/codeChallenge/codeChallenge';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { lessonCompletionDataType } from 'src/state/lessonCompletion/lessonCompletion.types';
import { resetSublesson } from 'src/state/sublesson/sublesson';
import { removeEmpty } from 'src/utils/general';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';

// I stopped in the middle of converting the lesson stuff
export const resetLesson = ({ sublessons }: LessonType) => {
  if (!sublessons) {
    return [];
  }

  const newLessonCompletionData: lessonCompletionDataType = sublessons.map(
    ({ steps }) => ({
      steps: (steps || []).filter(removeEmpty).map((step) => {
        const formattedStep = getStepFromSublessonStep(step);
        const startingCode =
          formattedStep.__typename === 'CodeChallenge'
            ? getCodeChallengeStartingCode(
                formattedStep as FlattenStrapi<CodeChallengeDataFragment>,
                false,
              )
            : '';

        return {
          startingCode,
        };
      }),
      introduction: {},
    }),
  );

  lessonCompletionDataVar(newLessonCompletionData);
  resetSublesson();
  setSublessonIndex(0);
};
