import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { resetSublessonSidebar } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';

export const resetLesson = () => {
  resetSublessonSidebar();
  currentSublessonIndexVar(0);
};
