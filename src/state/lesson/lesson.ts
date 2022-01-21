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
import { normalizeStrapiData, notEmpty } from 'src/utils/general';

// I stopped in the middle of converting the lesson stuff
export const resetLesson = ({ sublessons }: LessonType) => {
  if (!sublessons?.data) {
    return [];
  }

  const newLessonCompletionData: lessonCompletionDataType = normalizeStrapiData(
    sublessons,
  ).map(({ challenges }) => ({
    challenges: (challenges || []).filter(notEmpty).map((challenge) => {
      const formattedChallenge = getChallengeFromSublessonChallenge(challenge);
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
