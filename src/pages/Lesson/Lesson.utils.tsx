import {
  resetSublesson,
  setSublessonIndex,
} from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';

export const resetLesson = () => {
  resetSublesson();
  setSublessonIndex(0);
};
