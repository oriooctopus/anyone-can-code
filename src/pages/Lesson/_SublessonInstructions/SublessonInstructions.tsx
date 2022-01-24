import { useReactiveVar } from '@apollo/client';
import { Text } from '@chakra-ui/layout';
import '@fontsource/roboto';
import React, { useEffect } from 'react';
import { SublessonInstructionsDataFragment } from 'src/generated/graphql';
import {
  getChallengesFromSublessonChallenges,
  isSublessonIntroduction,
  useSublessonNavigation,
} from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { contentPanelScrollToTopFunctionVar } from 'src/state/general/general.reactiveVariables';
import { updateCurrentEditorValue } from 'src/state/lessonCompletion/lessonCompletion';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { getSublessonStartingCode } from 'src/state/sublesson/sublesson.utils';
import { RecursiveNormalize } from 'src/utils/normalizeStrapi';
import { Challenge } from 'components/Challenges/Challenge';
import { ChallengeButton } from 'components/Challenges/Challenge.styles';
import { ContentPanel } from 'components/ContentPanel/ContentPanel';
import Markdown from 'components/Markdown/Markdown';

type props = {
  // so sublesson would be normalized
  sublesson: RecursiveNormalize<SublessonInstructionsDataFragment>;
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
    debugger;
    console.log('sublesson', sublesson);
    const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
    const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
    const contentPanelScrollToTopFunction = useReactiveVar(
      contentPanelScrollToTopFunctionVar,
    );
    const { isEndOfLesson, onClickNext } = useSublessonNavigation({
      sublesson,
      totalSublessons,
    });

    const { challenges, description, name, lesson } = sublesson;

    const parsedChallenges = getChallengesFromSublessonChallenges(challenges);
    const currentChallenge = parsedChallenges[currentChallengeIndex];
    const nextButtonText = isEndOfLesson ? 'Go to next lesson' : 'Next';
    const isIntroduction = isSublessonIntroduction(currentChallengeIndex);

    const showGoBackIndicator = !isIntroduction || currentSublessonIndex !== 0;

    const sublessonText = (
      <>
        <Text fontSize="26px">{name}</Text>
        <Markdown containerOverrides={{ mb: '35px', mt: '10px' }}>
          {description}
        </Markdown>

        {isIntroduction && (
          <ChallengeButton onClick={onClickNext}>
            {challenges?.length ? 'Begin Challenges' : nextButtonText}
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
      updateCurrentEditorValue(getSublessonStartingCode());
    }, [sublesson.id]);

    useEffect(contentPanelScrollToTopFunction, [
      sublesson.id,
      currentChallenge?.id,
    ]);

    return (
      <ContentPanel
        onGoBack={showGoBackIndicator ? onGoBack : undefined}
        secondaryContent={!isIntroduction && sublessonText}
      >
        <>
          <Text fontSize="13px" textTransform="uppercase">
            {lesson?.name}
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

SublessonInstructions.displayName = 'SublessonInstructions';
