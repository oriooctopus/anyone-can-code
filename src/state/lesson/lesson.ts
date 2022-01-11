import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { LessonType } from 'src/pages/Lesson/Lesson';
import {
  getChallengeFromSublessonChallenge,
  setSublessonIndex,
} from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { getCodeChallengeStartingCode } from 'src/state/challenge/codeChallenge/codeChallenge';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { lessonCompletionDataType } from 'src/state/lessonCompletion/lessonCompletion.types';
import { resetSublesson } from 'src/state/sublesson/sublesson';
import { notEmpty } from 'src/utils/general';

// I stopped in the middle of converting the lesson stuff
export const resetLesson = ({ attributes: lesson }: LessonType) => {
  const newLessonCompletionData: lessonCompletionDataType = (
    lesson?.sublessons?.data || []
  ).map(({ attributes }) => ({
    challenges: (attributes?.challenges || [])
      .filter(notEmpty)
      .map((challenge) => {
        const formattedChallenge =
          getChallengeFromSublessonChallenge(challenge);
        const startingCode =
          formattedChallenge.__typename === 'CodeChallengeEntity'
            ? getCodeChallengeStartingCode(
                formattedChallenge as CodeChallengeDataFragment,
                false,
              )
            : '';

        return {
          startingCode,
        };
      }),
    introduction: {},
  }));

  lessonCompletionDataVar(newLessonCompletionData);
  resetSublesson();
  setSublessonIndex(0);
};
