import { Box, Divider, Flex } from '@chakra-ui/layout';
import React from 'react';
import SublessonCard from '../SublessonCard/SublessonCard';

interface IProps {}

const LessonProgress = React.memo(({}: IProps) => {
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
      <SublessonCard>Introduction to console</SublessonCard>
      <SublessonCard active>
        Console log a variable in between paranthesis
      </SublessonCard>
      <SublessonCard>Introduction to console</SublessonCard>
      <SublessonCard>Introduction to console</SublessonCard>
      <SublessonCard>Introduction to console</SublessonCard>
    </Box>
  );
});

export default LessonProgress;
