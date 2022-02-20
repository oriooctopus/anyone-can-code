import { useReactiveVar } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import {
  SublessonDataFragment,
  useGetSublessonNavigationDataQuery,
} from 'src/generated/graphql';
import { updateSublessonIntroductionCompletion } from 'src/state/lessonCompletion/lessonCompletion';
import { setStepIndex } from 'src/state/step/step';
import {
  challengeAttemptStatusVar,
  currentStepIndexVar,
} from 'src/state/step/step.reactiveVariables';
import { ChallengeAttemptStatusEnum } from 'src/state/step/step.types';
import { resetSublesson } from 'src/state/sublesson/sublesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { StepFragment } from 'src/types/generalTypes';
import { removeEmpty } from 'src/utils/general';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { NN } from 'src/utils/typescriptUtils';

/*
 * Because the CMS does not allow for proper union types we
 * need to have a separate field for each possible type when
 * entering it in the CMS. However, once we get the data we can
 * convert it to the Challenge union type
 */
export const getStepFromSublessonStep = (
  sublessonStep: NonNullable<
    NonNullable<FlattenStrapi<SublessonDataFragment>['steps']>[number]
  >,
): StepFragment => {
  // TODO: make this code more elegant
  if (sublessonStep.codeChallenge?.data?.attributes) {
    return {
      id: sublessonStep.codeChallenge.data?.id,
      ...sublessonStep.codeChallenge.data?.attributes,
    };
  } else if (sublessonStep.multipleChoiceChallenge?.data?.attributes) {
    return {
      id: sublessonStep.multipleChoiceChallenge.data?.id,
      ...sublessonStep.multipleChoiceChallenge.data?.attributes,
    };
  } else if (sublessonStep.playground?.data?.attributes) {
    return {
      id: sublessonStep.playground.data?.id,
      ...sublessonStep.playground.data?.attributes,
    };
  }

  throw new Error(
    `Sublesson step of id ${sublessonStep.id} did not contain any steps. Is the step/sublesson still a draft?`,
  );
};

export const parseSublessonSteps = (
  steps: NN<SublessonDataFragment['attributes']>['steps'],
): Array<StepFragment> => {
  return (steps || []).filter(removeEmpty).flatMap(getStepFromSublessonStep);
};

export const isSublessonIntroduction = (index: number) => index === -1;

export const setSublessonIndex = (lessonIndex: number) => {
  currentSublessonIndexVar(lessonIndex);
  resetSublesson();
};

type useSublessonNavigationProps = {
  sublesson: FlattenStrapi<SublessonDataFragment>;
  totalSublessons: number;
};

export const useSublessonNavigation = ({
  sublesson: { steps, lesson },
  totalSublessons,
}: useSublessonNavigationProps) => {
  const history = useHistory();
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentStepIndex = useReactiveVar(currentStepIndexVar);

  const { data } = useGetSublessonNavigationDataQuery({
    variables: { currentLessonId: Number(lesson?.id) },
  });

  const isLastChallenge = currentStepIndex + 1 === steps?.length;
  const isLastSublesson = currentSublessonIndex + 1 === totalSublessons;
  const isEndOfLesson = isLastChallenge && isLastSublesson;
  const isIntroduction = isSublessonIntroduction(currentStepIndex);
  const nextLessonSlug = data?.nextLessonSlug;

  const onClickNext = () => {
    challengeAttemptStatusVar(ChallengeAttemptStatusEnum.notAttempted);

    if (isIntroduction) {
      updateSublessonIntroductionCompletion(currentSublessonIndex, true);
    }

    if (!isLastChallenge) {
      setStepIndex(currentStepIndex + 1);
    } else if (!isLastSublesson) {
      setSublessonIndex(currentSublessonIndex + 1);
    } else {
      history.push(`/lesson/${nextLessonSlug}`);
    }
  };

  return {
    isEndOfLesson,
    onClickNext,
  };
};
