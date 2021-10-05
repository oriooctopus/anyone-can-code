import { useReactiveVar } from '@apollo/client';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import React from 'react';
import '@fontsource/roboto';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import {
  getChallengesFromSublessonChallenges,
  useGetLessonDescription,
  useOnClickNext,
} from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.utils';
import { FlText } from 'components/Typography/FlText';
import Markdown from 'components/Markdown/Markdown';
import { Challenge } from 'components/Challenges/Challenge';
import { ChallengeButton } from 'components/Challenges/Challenge.utils';
import { ContentPanel } from 'components/ContentPanel/ContentPanel';
import { Text } from '@chakra-ui/layout';

type props = {
  sublesson: SublessonInstructionsDataFragment;
  totalSublessons: number;
  /*
   * When a user presses 'go back' at the beginning of a sublesson,
   * they go to the end of the previous sublesson
   */
  lastChallengeIndexOfPreviousSublesson: number | undefined;
};

export const SublessonInstructions = React.memo(
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

    const showGoBackIndicator =
      !isLessonIntroduction || currentSublessonIndex !== 0;

    const sublessonText = (
      <>
        <Text fontSize="26px">{name}</Text>
        <Markdown mb="35px">{description}</Markdown>
        {isLessonIntroduction && (
          <ChallengeButton onClick={onClickNext}>
            {sublessonChallenges.length ? 'Begin Challenges' : 'Next'}
          </ChallengeButton>
        )}
      </>
    );

    const onGoBack = () => {
      if (currentChallengeIndex === -1) {
        currentSublessonIndexVar(currentSublessonIndex - 1);
        currentChallengeIndexVar(lastChallengeIndexOfPreviousSublesson);
      } else {
        currentChallengeIndexVar(currentChallengeIndex - 1);
      }
    };

    return (
      <ContentPanel
        includeSettings={true}
        onGoBack={showGoBackIndicator && onGoBack}
        secondaryContent={!isLessonIntroduction && sublessonText}
      >
        <>
          <FlText variant="smallLabel">{lesson?.name}</FlText>
          {isLessonIntroduction ? (
            sublessonText
          ) : (
            <Challenge
              challenge={parsedChallenges[currentChallengeIndex]}
              onClickNext={onClickNext}
            />
          )}
        </>
      </ContentPanel>
    );
  },
);
