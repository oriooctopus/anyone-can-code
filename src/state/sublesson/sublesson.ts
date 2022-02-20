import { sublessonStepStartingIndex } from 'src/App.constants';
import { setStepIndex } from 'src/state/step/step';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';

export const resetSublesson = () => {
  setStepIndex(sublessonStepStartingIndex);
};

export const setSublessonIndex = (lessonIndex: number) => {
  currentSublessonIndexVar(lessonIndex);
  resetSublesson();
};
