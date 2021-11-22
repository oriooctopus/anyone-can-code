import SublessonCard from './SublessonCard/SublessonCard';
import { useReactiveVar } from '@apollo/client';
import { Box, Divider, Flex } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { BsMap } from 'react-icons/bs';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { LessonProgressDataFragment } from 'src/generated/graphql';
import { ProgressStepper } from 'components/ProgressStepper/ProgressStepper';

interface IProps {
  sublessons: Array<LessonProgressDataFragment>;
}

const LessonProgress = React.memo(({ sublessons }: IProps) => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const currentSublesson = sublessons[currentSublessonIndex];

  const currentSublessonPercentCompleted =
    currentChallengeIndex < 0
      ? 0
      : // we add one because the initial index is -1 when on the lesson text
        ((currentChallengeIndex + 1) /
          (currentSublesson.challenges?.length + 1)) *
        100;
  console.log(
    'completed',
    currentSublessonPercentCompleted,
    sublessons.length,
    currentSublessonIndex,
  );

  return (
    <Box bgColor="#172A4E" color="white" textAlign="center" py="20px">
      <Heading size="md">Progress</Heading>
      <ProgressStepper
        title="Lesson"
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
        ]}
      />
    </Box>
  );
});

export default LessonProgress;
