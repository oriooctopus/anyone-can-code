import SublessonCard from './SublessonCard/SublessonCard';
import { useReactiveVar } from '@apollo/client';
import { Box, Divider, Flex } from '@chakra-ui/layout';
import React from 'react';
import { BsMap } from 'react-icons/bs';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { LessonProgressDataFragment } from 'src/generated/graphql';

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
    <Box color="white" mr="30px" mt="15px">
      <Box>
        {sublessons.map(({ name }, index) => (
          <SublessonCard
            active={index === currentSublessonIndex}
            percentCompleted={currentSublessonPercentCompleted}
            key={name}
          >
            {name}
          </SublessonCard>
        ))}
      </Box>
      {/* the debug handbook and other stuff would go in here*/}
      {/* <Flex>
        BsMap
      </Flex> */}
    </Box>
  );
});

export default LessonProgress;
