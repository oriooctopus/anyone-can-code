import SublessonCard from './SublessonCard/SublessonCard';
import { useReactiveVar } from '@apollo/client';
import { Box, Divider, Flex } from '@chakra-ui/layout';
import { Heading, useBoolean } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsMap } from 'react-icons/bs';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { LessonProgressDataFragment } from 'src/generated/graphql';
import { getChallengesFromSublessonChallenges } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { rem } from 'src/styles/typography/font';
import { ProgressStateEnum } from 'src/types/generalTypes';
import { ProgressStepper } from 'components/ProgressStepper/ProgressStepper';

interface IProps {
  sublessons: Array<LessonProgressDataFragment>;
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

const LessonProgress = React.memo(({ sublessons }: IProps) => {
  const [showStepperHoverActions, setShowStepperHoverActions] = useBoolean();

  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const currentSublesson = sublessons[currentSublessonIndex];
  // currentSublesson.

  const lessonProgressStepper = sublessons.map(({ name }, index) => ({
    onClick: () => currentSublessonIndexVar(index),
    hoverText: name,
    state: getProgressState(currentSublessonIndex, index),
  }));
  const currentSublessonParsedChallenges = getChallengesFromSublessonChallenges(
    currentSublesson.challenges,
  );
  const sublessonProgressStepper = currentSublesson.challenges.map(
    ({ prompt }, index) => ({
      onClick: () => currentSublessonIndexVar(index),
      hoverText: name,
      state: getProgressState(currentSublessonIndex, index),
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
    >
      <Heading size="md" mb={rem(25)}>
        Progress
      </Heading>
      <ProgressStepper
        showHoverActions={showStepperHoverActions}
        title="Lesson"
        steps={[
          {
            hoverText: 'first lesson',
            state: 'complete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'first lesson',
            state: 'current',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'first lesson',
            state: 'complete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'second lesson',
            state: 'complete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'third lesson',
            state: 'incomplete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'third lesson',
            state: 'incomplete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'third lesson',
            state: 'incomplete',
            onClick: () => console.log('clicked'),
          },
        ]}
      />
      <ProgressStepper
        showHoverActions={showStepperHoverActions}
        title="Sublesson"
        steps={[
          {
            hoverText: 'first lesson',
            state: 'complete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'second lesson',
            state: 'current',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'third lesson',
            state: 'incomplete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'third lesson',
            state: 'incomplete',
            onClick: () => console.log('clicked'),
          },
          {
            hoverText: 'third lesson',
            state: 'incomplete',
            onClick: () => console.log('clicked'),
          },
        ]}
      />
    </Box>
  );
});

export default LessonProgress;
