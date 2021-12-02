// what if instead of red white and green, we use grey instead of red, and something else instead of white?yu
import { useReactiveVar } from '@apollo/client';
import { Box } from '@chakra-ui/layout';
import { Heading, useBoolean } from '@chakra-ui/react';
import * as React from 'react';
import { LessonSidebarDataFragment } from 'src/generated/graphql';
import { setChallengeIndex } from 'src/state/challenge/challenge';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { setSublessonIndex } from 'src/state/sublesson/sublesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { rem } from 'src/styles/typography/font';
import { ProgressStateEnum } from 'src/types/generalTypes';
import { ProgressStepper } from 'components/ProgressStepper/ProgressStepper';

interface IProps {
  sublessons: Array<LessonSidebarDataFragment>;
}

/**
 * This logic inside is temporary. This should actually get the
 * progress state from the backend lesson completion data, and right
 * now this doesn't actually work 100% right (if a user skips around)
 * it will show the info incorrectly.
 */
const getProgressState = (
  currentIndex: number,
  lessonIndex: number,
): ProgressStateEnum => {
  if (currentIndex === lessonIndex) {
    return ProgressStateEnum.CURRENT;
  } else if (currentIndex > lessonIndex) {
    return ProgressStateEnum.COMPLETE;
  } else {
    return ProgressStateEnum.INCOMPLETE;
  }
};

const LessonSidebar = React.memo(({ sublessons }: IProps) => {
  const [showStepperHoverActions, setShowStepperHoverActions] = useBoolean();

  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const currentSublesson = sublessons[currentSublessonIndex];

  const lessonSidebarStepper = sublessons.map(({ name }, index) => ({
    onClick: () => setSublessonIndex(index),
    hoverText: name,
    state: getProgressState(currentSublessonIndex, index),
  }));
  /**
   * We add an extra empty object at the beginning to represent
   * the introduction. This is somewhat janky so later on let's
   * reconsider this
   */
  const sublessonSidebarStepper = [{}, currentSublesson.challenges].map(
    (_challenge, index) => ({
      hoverText: index === 0 ? 'Introduction' : `Challenge ${index}`,
      onClick: () => setChallengeIndex(index),
      state: getProgressState(currentChallengeIndex, index),
    }),
  );

  return (
    <Box
      onMouseEnter={setShowStepperHoverActions.on}
      onMouseLeave={setShowStepperHoverActions.off}
      bgColor="#172A4E"
      color="white"
      textAlign="center"
      py="20px"
      flex={`${rem(115)} 0 0`}
      overflow="hidden"
    >
      <Heading size="md" mb={rem(25)}>
        Progress
      </Heading>
      <ProgressStepper
        showHoverActions={showStepperHoverActions}
        title="Lesson"
        steps={lessonSidebarStepper}
      />
      <ProgressStepper
        showHoverActions={showStepperHoverActions}
        title="Sublesson"
        steps={sublessonSidebarStepper}
      />
    </Box>
  );
});

export default LessonSidebar;
