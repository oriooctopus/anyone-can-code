import { useReactiveVar } from '@apollo/client';
import { Box, Divider, Flex } from '@chakra-ui/layout';
import React from 'react';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { LessonProgressDataFragment } from 'src/generated/graphql';
import SublessonCard from '../SublessonCard/SublessonCard';

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
        ((currentChallengeIndex + 1) / currentSublesson.challenges?.length) *
        100;
  console.log(
    'completed',
    currentSublessonPercentCompleted,
    sublessons.length,
    currentSublessonIndex,
  );

  return (
    <Box color="white" mr="30px" mt="15px">
      <Divider
        bgColor="white"
        borderRadius="2px"
        orientation="vertical"
        h="100%"
        position="absolute"
        left="0"
        top="0"
        bottom="0"
      />
      {sublessons.map(({ name }, index) => (
        <SublessonCard
          active={index === currentSublessonIndex}
          percentCompleted={currentSublessonPercentCompleted}
        >
          {name}
        </SublessonCard>
      ))}
    </Box>
  );
});

export default LessonProgress;
