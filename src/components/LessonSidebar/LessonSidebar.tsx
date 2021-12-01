// what if instead of red white and green, we use grey instead of red, and something else instead of white?yu
import SublessonCard from './SublessonCard/SublessonCard';
import { useReactiveVar } from '@apollo/client';
import { Box, Divider, Flex } from '@chakra-ui/layout';
import { Heading, useBoolean } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsMap } from 'react-icons/bs';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { LessonSidebarDataFragment } from 'src/generated/graphql';
import {
  getChallengesFromSublessonChallenges,
  setSublessonIndex,
} from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { rem } from 'src/styles/typography/font';
import { ProgressStateEnum } from 'src/types/generalTypes';
import { setChallengeIndex } from 'components/Challenges/Challenge.utils';
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
  console.log('keeps rendering');
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
