import { useReactiveVar } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { sublessonChallengeStartingIndex } from 'src/App.constants';
import {
  SublessonInstructionsDataFragment, // useGetSublessonNavigationDataQuery,
} from 'src/generated/graphql';
import { setChallengeIndex } from 'src/state/challenge/challenge';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';

export const resetSublesson = () => {
  setChallengeIndex(sublessonChallengeStartingIndex);
};

export const setSublessonIndex = (lessonIndex: number) => {
  currentSublessonIndexVar(lessonIndex);
  resetSublesson();
};
