// what if instead of red white and green, we use grey instead of red, and something else instead of white?yu
import { Box, Flex, VStack } from '@chakra-ui/layout';
import { Heading, IconButton, useBoolean } from '@chakra-ui/react';
import * as React from 'react';
import { BsJournals } from 'react-icons/bs';
import { LessonSidebarDataFragment } from 'src/generated/graphql';
import { rem } from 'src/styles/typography/font';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { LearningSidebarPopupButton } from 'components/LearningSidebarPopupButton/LearningSidebarPopupButton';
import { LessonExternalResources } from 'components/LessonExternalResources/LessonExternalResources';
import { useGetLessonSidebarProgressStepperData } from 'components/LessonSidebar/LessonSidebar.utils';
import { ProgressStepper } from 'components/ProgressStepper/ProgressStepper';
import { SyntaxHandbook } from 'components/SyntaxHandbook/SyntaxHandbook';

interface IProps {
  sublessons: FlattenStrapi<LessonSidebarDataFragment>[];
}

export const LessonSidebar = React.memo(({ sublessons }: IProps) => {
  // const [showStepperHoverActions, setShowStepperHoverActions] = useBoolean();
  // TODO: memo this or something so that it doesn't run every time the hover happens
  const { allSublessonsStepperData, currentSublessonStepperData } =
    useGetLessonSidebarProgressStepperData(sublessons);

  return (
    <Flex
      direction="column"
      // onMouseEnter={setShowStepperHoverActions.on}
      // onMouseLeave={setShowStepperHoverActions.off}
      bgColor="#172A4E"
      color="white"
      textAlign="center"
      py="20px"
      flex={`${rem(115)} 0 0`}
      // overflow="hidden" this might be really important for the bug that was happening before
    >
      <Heading size="md" mb={rem(25)}>
        Progress
      </Heading>
      <ProgressStepper
        // showHoverActions={showStepperHoverActions}
        title="Lesson"
        steps={allSublessonsStepperData}
      />
      <ProgressStepper
        // showHoverActions={showStepperHoverActions}
        title="Sublesson"
        steps={currentSublessonStepperData}
      />
      <VStack marginTop="auto" justifyContent="center" spacing="30px">
        <LessonExternalResources />
        <SyntaxHandbook />
      </VStack>
    </Flex>
  );
});

LessonSidebar.displayName = 'LessonSidebar';
