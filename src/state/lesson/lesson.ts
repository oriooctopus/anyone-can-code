import { LessonType } from 'src/pages/Lesson/Lesson';
import { setSublessonIndex } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { resetSublesson } from 'src/state/sublesson/sublesson';

export const resetLesson = (lesson: LessonType) => {
  const newLessonCompletionData = lesson.sublessons.map(({ challenges }) =>
    challenges.map(() => ({})),
  );

  lessonCompletionDataVar(newLessonCompletionData);
  resetSublesson();
  setSublessonIndex(0);
};
