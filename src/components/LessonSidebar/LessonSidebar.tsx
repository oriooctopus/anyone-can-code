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
import {
  useGetLessonCompletionProgressStates,
  useGetProgressState,
} from 'components/LessonSidebar/LessonSidebar.utils';
import { ProgressStepper } from 'components/ProgressStepper/ProgressStepper';

interface IProps {
  sublessons: Array<LessonSidebarDataFragment>;
}

export const LessonSidebar = React.memo(({ sublessons }: IProps) => {
  const [showStepperHoverActions, setShowStepperHoverActions] = useBoolean();
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const { challengeCompletions, sublessonCompletions } =
    useGetLessonCompletionProgressStates();

  const currentSublesson = sublessons[currentSublessonIndex];
  const lessonSidebarStepper = sublessons.map(({ name }, sublessonIndex) => ({
    onClick: () => setSublessonIndex(sublessonIndex),
    hoverText: name,
    state: sublessonCompletions[sublessonIndex],
  }));
  /**
   * We add an extra empty object at the beginning to represent
   * the introduction. This is somewhat janky so later on let's
   * reconsider this
   */
  const sublessonSidebarStepper = [{}, currentSublesson.challenges].map(
    (_challenge, challengeIndex) => ({
      hoverText:
        challengeIndex === 0 ? 'Introduction' : `Challenge ${challengeIndex}`,
      onClick: () => setChallengeIndex(challengeIndex - 1),
      state: challengeCompletions?.[currentSublessonIndex]?.[challengeIndex],
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

LessonSidebar.displayName = 'LessonSidebar';
