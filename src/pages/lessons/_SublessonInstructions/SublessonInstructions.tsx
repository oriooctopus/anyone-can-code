import { useReactiveVar } from '@apollo/client';
import { currentChallengeIndexVar } from 'src/cache';
import React from 'react';
import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import '@fontsource/roboto';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import {
  SublessonInstructionsContainer,
  SublessonName,
} from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.styles';
import {
  getChallengesFromSublessonChallenges,
  useOnClickNext,
} from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.utils';
import { FlText } from 'components/Typography/FlText';
import Markdown from 'components/Markdown/Markdown';
import { Challenge } from 'components/Challenges/Challenge';

type props = {
  sublesson: SublessonInstructionsDataFragment;
  totalSublessons: number;
};

const SublessonInstructions = React.memo(
  ({ sublesson, totalSublessons }: props) => {
    const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
    const { challenges, description, name, lesson } = sublesson;
    const parsedChallenges = getChallengesFromSublessonChallenges(challenges);
    const onClickNext = useOnClickNext({ sublesson, totalSublessons });

    return (
      <SublessonInstructionsContainer>
        <FlText variant="smallLabel">{lesson?.name}</FlText>
        <SublessonName variant="h2">{name}</SublessonName>
        <Markdown>{description}</Markdown>
        <Divider color="#D0D0D5" opacity="1" mt="4" />
        <Box mt="15px">
          <Text size="16" fontWeight="bold" mb="5px">
            Challenge
          </Text>
          <Challenge
            challenge={parsedChallenges[currentChallengeIndex]}
            onClickNext={onClickNext}
          />
        </Box>
      </SublessonInstructionsContainer>
    );
  },
);

export default SublessonInstructions;
