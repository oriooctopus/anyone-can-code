import { useReactiveVar } from '@apollo/client';
import {
  codeEditorValueVar,
  currentChallengeIndexVar,
  currentSublessonIndexVar,
  SublessonTextLengthPreferenceEnum,
  sublessonTextLengthPreferenceVar,
  testResultsVar,
} from 'src/cache';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import { ChallengeFragment } from 'src/types/generalTypes';

/*
 * Because the CMS does not allow for proper union types we
 * need to have a separate field for each possible type when
 * entering it in the CMS. However, once we get the data we can
 * convert it to the Challenge union type
 */
export const getChallengesFromSublessonChallenges = (
  sublessonChallenges: SublessonInstructionsDataFragment['sublessonChallenges'],
): Array<ChallengeFragment> => {
  return (sublessonChallenges || []).map(({ challenge }) => {
    // TODO: make this code more elegant
    if (challenge.codeChallenge) {
      return challenge.codeChallenge;
    } else if (challenge.multipleChoiceChallenge) {
      return challenge.multipleChoiceChallenge;
    }

    throw new Error(
      'Sublesson challenge did not contain any challenges. Is the challenge/sublesson still a draft?',
    );
  });
};

type useOnClickNextProps = {
  sublesson: SublessonInstructionsDataFragment;
  totalSublessons: number;
};

const resetSublessonProgress = () => {
  currentChallengeIndexVar(-1);
  testResultsVar([]);
};

export const useOnClickNext = ({
  sublesson: { sublessonChallenges },
  totalSublessons,
}: useOnClickNextProps) => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);

  return () => {
    if (currentChallengeIndex + 1 !== sublessonChallenges.length) {
      console.log('next challenge');
      currentChallengeIndexVar(currentChallengeIndex + 1);
      return;
    } else if (currentSublessonIndex + 1 !== totalSublessons) {
      console.log('next sublesson');
      currentSublessonIndexVar(currentSublessonIndex + 1);
      resetSublessonProgress();
      return;
    }

    console.log('going to next lesson');
  };
};

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
