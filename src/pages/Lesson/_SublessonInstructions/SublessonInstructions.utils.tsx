import { useReactiveVar } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import {
  SublessonInstructionsDataFragment, // useGetSublessonNavigationDataQuery,
} from 'src/generated/graphql';
import { setChallengeIndex } from 'src/state/challenge/challenge';
import {
  challengeAttemptStatusVar,
  currentChallengeIndexVar,
} from 'src/state/challenge/challenge.reactiveVariables';
import { ChallengeAttemptStatusEnum } from 'src/state/challenge/challenge.types';
import { sublessonTextLengthPreferenceVar } from 'src/state/general/general.reactiveVariables';
import { SublessonTextLengthPreferenceEnum } from 'src/state/general/general.types';
import { updateSublessonIntroductionCompletion } from 'src/state/lessonCompletion/lessonCompletion';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { resetSublesson } from 'src/state/sublesson/sublesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { ChallengeFragment } from 'src/types/generalTypes';
import { notEmpty } from 'src/utils/general';
import { NN } from 'src/utils/typescriptUtils';

/*
 * Because the CMS does not allow for proper union types we
 * need to have a separate field for each possible type when
 * entering it in the CMS. However, once we get the data we can
 * convert it to the Challenge union type
 */
export const getChallengeFromSublessonChallenge = (
  sublessonChallenge: NN<
    NN<
      NN<SublessonInstructionsDataFragment['attributes']>['challenges']
    >[number]
  >,
): ChallengeFragment => {
  // TODO: make this code more elegant
  if (sublessonChallenge.codeChallenge?.data) {
    return sublessonChallenge.codeChallenge.data;
  } else if (sublessonChallenge.multipleChoiceChallenge?.data) {
    return sublessonChallenge.multipleChoiceChallenge.data;
  }

  throw new Error(
    `Sublesson challenge of id ${sublessonChallenge.id} did not contain any challenges. Is the challenge/sublesson still a draft?`,
  );
};

export const getChallengesFromSublessonChallenges = (
  challenges: NN<SublessonInstructionsDataFragment['attributes']>['challenges'],
): Array<ChallengeFragment> => {
  return (challenges || [])
    .filter(notEmpty)
    .flatMap(getChallengeFromSublessonChallenge);
};

export const isSublessonIntroduction = (index: number) => index === -1;

export const setSublessonIndex = (lessonIndex: number) => {
  currentSublessonIndexVar(lessonIndex);
  resetSublesson();
};

type useSublessonNavigationProps = {
  sublesson: SublessonInstructionsDataFragment;
  totalSublessons: number;
};

export const useSublessonNavigation = ({
  sublesson: {
    // @ts-expect-error nextLesson temporary silence
    attributes: { challenges, lesson },
  },
  totalSublessons,
}: useSublessonNavigationProps) => {
  const history = useHistory();
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const useGetSublessonNavigationDataQuery = () => {
    return { data: {} };
  };
  // @ts-expect-error nextLesson temporary silence
  const { data } = useGetSublessonNavigationDataQuery({
    variables: { currentLessonId: Number(lesson.id) },
  });
  const isLastChallenge = currentChallengeIndex + 1 === challenges.length;
  const isLastSublesson = currentSublessonIndex + 1 === totalSublessons;
  const isEndOfLesson = isLastChallenge && isLastSublesson;
  const isIntroduction = isSublessonIntroduction(currentChallengeIndex);

  const onClickNext = () => {
    challengeAttemptStatusVar(ChallengeAttemptStatusEnum.notAttempted);

    if (isIntroduction) {
      updateSublessonIntroductionCompletion(currentSublessonIndex, true);
    }

    if (!isLastChallenge) {
      setChallengeIndex(currentChallengeIndex + 1);
    } else if (!isLastSublesson) {
      setSublessonIndex(currentSublessonIndex + 1);
    } else {
      // @ts-expect-error nextLesson temporary silence
      history.push(`/lesson/${data?.nextLessonSlug}`);
    }
  };

  return {
    isEndOfLesson,
    onClickNext,
  };
};
