import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { resetSublessonProgress } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';

export const resetLesson = () => {
  resetSublessonProgress();
  currentSublessonIndexVar(0);
};
