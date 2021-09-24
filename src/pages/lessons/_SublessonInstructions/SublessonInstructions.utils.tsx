import { useReactiveVar } from '@apollo/client';
import {
  codeEditorValueVar,
  currentChallengeIndexVar,
  currentSublessonIndexVar,
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
  sublessonChallenges: SublessonInstructionsDataFragment['challenges'],
): Array<ChallengeFragment> => {
  return (sublessonChallenges || []).map((sublessonChallenge) => {
    if (sublessonChallenge.codeChallenge) {
      return sublessonChallenge.codeChallenge;
    } else if (sublessonChallenge.multipleChoiceChallenge) {
      return sublessonChallenge.multipleChoiceChallenge;
    }

    throw new Error(
      'sublesson challenge did not contain any challenges. Is the challenge/sublesson still a draft?',
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
  sublesson: { challenges },
  totalSublessons,
}: useOnClickNextProps) => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);

  return () => {
    if (currentChallengeIndex + 1 !== challenges.length) {
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
