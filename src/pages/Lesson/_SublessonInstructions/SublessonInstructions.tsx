import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import '@fontsource/roboto';
import React, { useEffect } from 'react';
import {
  codeEditorValueVar,
  contentPanelScrollToTopFunctionVar,
  currentChallengeIndexVar,
  currentSublessonIndexVar,
} from 'src/cache';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import {
  getChallengesFromSublessonChallenges,
  getSublessonStartingCode,
  isSublessonIntroduction,
  useGetLessonDescription,
  useSublessonNavigation,
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
    const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
    const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
    const contentPanelScrollToTopFunction = useReactiveVar(
      contentPanelScrollToTopFunctionVar,
    );
    const description = useGetLessonDescription(sublesson.descriptions);
    const parsedChallenges = getChallengesFromSublessonChallenges(
      sublesson.challenges,
    );
    const currentChallenge = parsedChallenges[currentChallengeIndex];
    const { isEndOfLesson, onClickNext } = useSublessonNavigation({
      sublesson,
      totalSublessons,
    });
    const nextButtonText = isEndOfLesson ? 'Go to next lesson' : 'Next';
    const isIntroduction = isSublessonIntroduction(currentChallengeIndex);

    const showGoBackIndicator = !isIntroduction || currentSublessonIndex !== 0;

    const sublessonText = (
      <>
        <Text fontSize="26px">{sublesson.name}</Text>
        <Markdown containerOverrides={{ mb: '35px', mt: '10px' }}>
          {description}
        </Markdown>

        {isIntroduction && (
          <ChallengeButton onClick={onClickNext}>
            {sublesson.challenges.length ? 'Begin Challenges' : 'Next'}
          </ChallengeButton>
        )}
      </>
    );

    const onGoBack = () => {
      if (isIntroduction) {
        currentSublessonIndexVar(currentSublessonIndex - 1);
        currentChallengeIndexVar(lastChallengeIndexOfPreviousSublesson);
      } else {
        currentChallengeIndexVar(currentChallengeIndex - 1);
      }
    };

    useEffect(() => {
      codeEditorValueVar(getSublessonStartingCode());
    }, [sublesson.id]);

    useEffect(contentPanelScrollToTopFunction, [
      sublesson.id,
      currentChallenge?.id,
    ]);

    return (
      <ContentPanel
        onGoBack={showGoBackIndicator && onGoBack}
        secondaryContent={!isIntroduction && sublessonText}
      >
        <>
          <Text fontSize="13px" textTransform="uppercase">
            {sublesson.lesson?.name}
          </Text>
          {isIntroduction ? (
            sublessonText
          ) : (
            <Challenge
              challenge={parsedChallenges[currentChallengeIndex]}
              onClickNext={onClickNext}
              nextButtonText={nextButtonText}
            />
          )}
        </>
      </ContentPanel>
    );
  },
);
