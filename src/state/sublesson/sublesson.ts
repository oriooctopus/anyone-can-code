import { useReactiveVar } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { sublessonChallengeStartingIndex } from 'src/App.constants';
import {
  SublessonInstructionsDataFragment,
  useGetSublessonNavigationDataQuery,
} from 'src/generated/graphql';
import { setChallengeIndex } from 'src/state/challenge/challenge';
import {
  challengeAttemptStatusVar,
  currentChallengeIndexVar,
} from 'src/state/challenge/challenge.reactiveVariables';
import { ChallengeAttemptStatusEnum } from 'src/state/challenge/challenge.types';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';

export const resetSublesson = () => {
  setChallengeIndex(sublessonChallengeStartingIndex);
};

export const setSublessonIndex = (lessonIndex: number) => {
  currentSublessonIndexVar(lessonIndex);
  resetSublesson();
};

type useSublessonNavigationProps = {
  sublesson: SublessonInstructionsDataFragment;
  totalSublessons: number;
};

export const useSublessonNavigation = ({
  sublesson: { challenges, lesson },
  totalSublessons,
}: useSublessonNavigationProps) => {
  const history = useHistory();
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const { data } = useGetSublessonNavigationDataQuery({
    variables: { currentLessonId: Number(lesson.id) },
  });
  const isLastChallenge = currentChallengeIndex + 1 === challenges.length;
  const isLastSublesson = currentSublessonIndex + 1 === totalSublessons;
  const isEndOfLesson = isLastChallenge && isLastSublesson;

  const onClickNext = () => {
    challengeAttemptStatusVar(ChallengeAttemptStatusEnum.notAttempted);

    if (!isLastChallenge) {
      setChallengeIndex(currentChallengeIndex + 1);
    } else if (!isLastSublesson) {
      setSublessonIndex(currentSublessonIndex + 1);
    } else {
      history.push(`/lesson/${data?.nextLessonSlug}`);
    }
  };

  return {
    isEndOfLesson,
    onClickNext,
  };
};
