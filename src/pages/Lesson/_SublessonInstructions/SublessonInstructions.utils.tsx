import { useReactiveVar } from '@apollo/client';
import { useHistory } from 'react-router-dom';
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
import {
  SublessonTextLengthPreferenceEnum,
  sublessonTextLengthPreferenceVar,
} from 'src/state/general';
import { updateSublessonIntroductionCompletion } from 'src/state/lessonCompletion/lessonCompletion';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { resetSublesson } from 'src/state/sublesson/sublesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { ChallengeFragment } from 'src/types/generalTypes';

/*
 * Because the CMS does not allow for proper union types we
 * need to have a separate field for each possible type when
 * entering it in the CMS. However, once we get the data we can
 * convert it to the Challenge union type
 */
export const getChallengeFromSublessonChallenge = (
  challenge: SublessonInstructionsDataFragment['challenges'][number],
): ChallengeFragment => {
  if (Boolean(challenge) === false) {
    return null;
  }

  // TODO: make this code more elegant
  if (challenge.codeChallenge) {
    return challenge.codeChallenge;
  } else if (challenge.multipleChoiceChallenge) {
    return challenge.multipleChoiceChallenge;
  }

  throw new Error(
    `Sublesson challenge of id ${challenge.id} did not contain any challenges. Is the challenge/sublesson still a draft?`,
  );
};

export const getChallengesFromSublessonChallenges = (
  challenges: SublessonInstructionsDataFragment['challenges'],
): Array<ChallengeFragment> => {
  return (challenges || []).flatMap(getChallengeFromSublessonChallenge);
};

export const isSublessonIntroduction = (index: number) => index === -1;

const descriptionPreferenceToNumericalValueMap: Record<
  SublessonTextLengthPreferenceEnum,
  number
> = {
  [SublessonTextLengthPreferenceEnum.short]: 0,
  [SublessonTextLengthPreferenceEnum.medium]: 1,
  [SublessonTextLengthPreferenceEnum.long]: 2,
};

const fallbackDirection = 'higher'; // later on we can make this configurable

const makeDescriptionsIntoArray = (
  descriptions: SublessonInstructionsDataFragment['descriptions'],
) => {
  const descriptionsArray = [] as Array<string>;
  Object.entries(descriptions).forEach(([key, description]) => {
    const descriptionLocation =
      descriptionPreferenceToNumericalValueMap[
        key as keyof typeof descriptionPreferenceToNumericalValueMap
      ];
    descriptionsArray[descriptionLocation] = description;
  });

  return descriptionsArray;
};

export const useGetLessonDescription = (
  descriptions: SublessonInstructionsDataFragment['descriptions'],
) => {
  const preference = useReactiveVar(sublessonTextLengthPreferenceVar);
  const descriptionsByIndex = makeDescriptionsIntoArray(descriptions);
  const preferredIndex = descriptionPreferenceToNumericalValueMap[preference];

  if (descriptionsByIndex[preferredIndex]) {
    return descriptionsByIndex[preferredIndex];
  }

  const closestHigher = descriptionsByIndex
    .slice(preferredIndex + 1)
    .filter((el) => Boolean(el))[0];
  const closestLower = descriptionsByIndex
    .slice(0, preferredIndex)
    .filter((el) => Boolean(el))
    .reverse()[0];

  if (!closestHigher && !closestLower) {
    throw new Error('No description exists');
  }

  const firstChoice =
    fallbackDirection === 'higher' ? closestHigher : closestLower;
  const secondChoice =
    fallbackDirection === 'higher' ? closestLower : closestHigher;

  return firstChoice || secondChoice;
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
      history.push(`/lesson/${data?.nextLessonSlug}`);
    }
  };

  return {
    isEndOfLesson,
    onClickNext,
  };
};
