// what if instead of red white and green, we use grey instead of red, and something else instead of white?yu
import { Box } from '@chakra-ui/layout';
import { Heading, useBoolean } from '@chakra-ui/react';
import * as React from 'react';
import { LessonSidebarDataFragment } from 'src/generated/graphql';
import { rem } from 'src/styles/typography/font';
import { useGetLessonSidebarProgressStepperData } from 'components/LessonSidebar/LessonSidebar.utils';
import { ProgressStepper } from 'components/ProgressStepper/ProgressStepper';

interface IProps {
  sublessons: Array<LessonSidebarDataFragment>;
}

export const LessonSidebar = React.memo(({ sublessons }: IProps) => {
  const [showStepperHoverActions, setShowStepperHoverActions] = useBoolean();
  const { allSublessonsStepperData, currentSublessonStepperData } =
    useGetLessonSidebarProgressStepperData(sublessons);

  return (
    <Box
      onMouseEnter={setShowStepperHoverActions.on}
      onMouseLeave={setShowStepperHoverActions.off}
      bgColor="#172A4E"
      color="white"
      textAlign="center"
      py="20px"
      flex={`${rem(115)} 0 0`}
      overflow="hidden"
    >
      <Heading size="md" mb={rem(25)}>
        Progress
      </Heading>
      <ProgressStepper
        showHoverActions={showStepperHoverActions}
        title="Lesson"
        steps={allSublessonsStepperData}
      />
      <ProgressStepper
        showHoverActions={showStepperHoverActions}
        title="Sublesson"
        steps={currentSublessonStepperData}
      />
    </Box>
  );
});

LessonSidebar.displayName = 'LessonSidebar';
