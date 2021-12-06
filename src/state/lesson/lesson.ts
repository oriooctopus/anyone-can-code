import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { LessonType } from 'src/pages/Lesson/Lesson';
import {
  getChallengeFromSublessonChallenge,
  setSublessonIndex,
} from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { getCodeChallengeStartingCode } from 'src/state/challenge/codeChallenge/codeChallenge';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import {
  ISublessonCompletionData,
  lessonCompletionDataType,
} from 'src/state/lessonCompletion/lessonCompletion.types';
import { resetSublesson } from 'src/state/sublesson/sublesson';

export const resetLesson = (lesson: LessonType) => {
  const newLessonCompletionData: lessonCompletionDataType =
    lesson.sublessons.map(({ challenges }): ISublessonCompletionData => {
      return {
        challenges: challenges.map((challenge) => {
          const formattedChallenge =
            getChallengeFromSublessonChallenge(challenge);
          const startingCode =
            formattedChallenge.__typename === 'CodeChallenge'
              ? getCodeChallengeStartingCode(
                  // @ts-expect-error will fix later
                  challenge as CodeChallengeDataFragment,
                  false,
                )
              : '';

          return {
            startingCode,
          };
        }),
        introductionCompleted: false,
      };
    });

  lessonCompletionDataVar(newLessonCompletionData);
  resetSublesson();
  setSublessonIndex(0);
};
