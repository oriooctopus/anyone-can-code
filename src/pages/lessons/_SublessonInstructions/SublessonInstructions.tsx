import { useReactiveVar } from '@apollo/client';
import {
  currentChallengeIndexVar,
  currentSublessonIndexVar,
  SublessonTextLengthPreferenceEnum,
  sublessonTextLengthPreferenceVar,
} from 'src/cache';
import React, { useState } from 'react';
import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import '@fontsource/roboto';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import {
  SublessonInstructionsContainer,
  SublessonName,
} from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.styles';
import {
  getChallengesFromSublessonChallenges,
  useGetLessonDescription,
  useOnClickNext,
} from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.utils';
import { FlText } from 'components/Typography/FlText';
import Markdown from 'components/Markdown/Markdown';
import { Challenge } from 'components/Challenges/Challenge';
import { ChallengeButton } from 'components/Challenges/Challenge.utils';
import { PanelNavigationIndicators } from 'components/PanelNavigationIndicators/PanelNavigationIndicators';
import { LessonSettings } from 'components/LessonSettings/LessonSettings';
import { useTheme } from 'src/styles/themes/theme';

type props = {
  sublesson: SublessonInstructionsDataFragment;
  totalSublessons: number;
  /*
   * When a user presses 'go back' at the beginning of a sublesson,
   * they go to the end of the previous sublesson
   */
  lastChallengeIndexOfPreviousSublesson: number | undefined;
};

const SublessonInstructions = React.memo(
  ({
    lastChallengeIndexOfPreviousSublesson,
    sublesson,
    totalSublessons,
  }: props) => {
    const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
    const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
    const { sublessonChallenges, descriptions, name, lesson } = sublesson;
    console.log('sublessonChallenges!!', sublessonChallenges);
    const description = useGetLessonDescription(descriptions);
    const parsedChallenges =
      getChallengesFromSublessonChallenges(sublessonChallenges);
    const onClickNext = useOnClickNext({ sublesson, totalSublessons });
    const isLessonIntroduction = currentChallengeIndex === -1;
    console.log('current challenge idnex', currentChallengeIndex);

    /*
     * TODO: Improve this indicator. It should be hidden unless the user is
     * at the very top of the page
     */
    const showScrollIndicator = !isLessonIntroduction;
    const showGoBackindicatpr =
      !isLessonIntroduction || currentSublessonIndex !== 0;

    const sublessonText = (
      <>
        <SublessonName variant="h2">{name}</SublessonName>
        <Markdown mb="35px">{description}</Markdown>
        {isLessonIntroduction && (
          <ChallengeButton onClick={onClickNext}>
            Begin Challenges
          </ChallengeButton>
        )}
      </>
    );

    const goBack = () => {
      if (currentChallengeIndex === -1) {
        currentSublessonIndexVar(currentSublessonIndex - 1);
        currentChallengeIndexVar(lastChallengeIndexOfPreviousSublesson);
      } else {
        currentChallengeIndexVar(currentChallengeIndex - 1);
      }
    };

    return (
      <Box
        bgColor="white"
        p="20px 20px 0"
        height="calc(100vh - 65px)"
        overflowY="scroll"
        position="relative"
      >
        <LessonSettings position="absolute" right="20px" top="15px" />
        <Box
          minHeight="calc(100vh - 80px)"
          d="flex"
          flexDir="column"
          alignItems="baseline"
        >
          <FlText variant="smallLabel">{lesson?.name}</FlText>
          {isLessonIntroduction ? (
            sublessonText
          ) : (
            <Challenge
              challenge={parsedChallenges[currentChallengeIndex]}
              onClickNext={onClickNext}
            />
          )}
          <PanelNavigationIndicators
            onGoBack={showGoBackindicatpr && goBack}
            scrollIndicator={showScrollIndicator}
            mb="20px"
          />
        </Box>
        {!isLessonIntroduction && (
          <>
            <Divider color="#D0D0D5" opacity="1" mb="20px" />
            {sublessonText}
          </>
        )}
      </Box>
    );
  },
);

export default SublessonInstructions;
