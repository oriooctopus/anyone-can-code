import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import '@fontsource/roboto';
import React from 'react';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import {
  getChallengesFromSublessonChallenges,
  useGetLessonDescription,
  useOnClickNext,
} from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { Challenge } from 'components/Challenges/Challenge';
import { ChallengeButton } from 'components/Challenges/Challenge.styles';
import { ContentPanel } from 'components/ContentPanel/ContentPanel';
import Markdown from 'components/Markdown/Markdown';

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
    const { challenges, descriptions, name, lesson } = sublesson;
    const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
    const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
    const description = useGetLessonDescription(descriptions);
    const parsedChallenges = getChallengesFromSublessonChallenges(challenges);
    const onClickNext = useOnClickNext({ sublesson, totalSublessons });
    const isLessonIntroduction = currentChallengeIndex === -1;

    const showGoBackIndicator =
      !isLessonIntroduction || currentSublessonIndex !== 0;

    const sublessonText = (
      <>
        <Text fontSize="26px">{name}</Text>
        <Markdown containerOverrides={{ mb: '35px' }}>{description}</Markdown>
        {isLessonIntroduction && (
          <ChallengeButton onClick={onClickNext}>
            {challenges.length ? 'Begin Challenges' : 'Next'}
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
        // includeSettings={true}
        onGoBack={showGoBackIndicator && onGoBack}
        secondaryContent={!isLessonIntroduction && sublessonText}
      >
        <>
          <Text fontSize="13px" textTransform="uppercase">
            {lesson?.name}
          </Text>
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
