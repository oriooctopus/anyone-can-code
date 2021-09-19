import React from 'react';
import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import '@fontsource/roboto';
import { useReactiveVar } from '@apollo/client';
import { codeEditorValueVar } from 'src/cache';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import {
  SublessonInstructionsContainer,
  SublessonName,
} from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.styles';
import { getChallengesFromSublessonChallenges } from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.utils';
import { FlText } from 'components/Typography/FlText';
import Markdown from 'components/Markdown/Markdown';
import { Challenge } from 'components/Challenges/Challenge';

type props = SublessonInstructionsDataFragment & {};

const SublessonInstructions: React.FC<props> = ({
  challenges,
  description,
  name,
  lesson,
}) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const parsedChallenges = getChallengesFromSublessonChallenges(challenges);

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
        <Challenge challenge={parsedChallenges[0]} />
      </Box>
    </SublessonInstructionsContainer>
  );
};

export default SublessonInstructions;
