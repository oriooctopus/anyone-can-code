import { Flex, VStack } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import * as React from 'react';
import { LessonSidebarDataFragment } from 'src/generated/graphql';
import { rem } from 'src/styles/typography/font';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { LessonExternalResources } from 'components/LessonExternalResources/LessonExternalResources';
import { useGetLessonSidebarProgressStepperData } from 'components/LessonSidebar/LessonSidebar.utils';
import { ProgressStepper } from 'components/ProgressStepper/ProgressStepper';
import { SyntaxHandbook } from 'components/SyntaxHandbook/SyntaxHandbook';

interface IProps {
  sublessons: FlattenStrapi<LessonSidebarDataFragment>[];
}

export const LessonSidebar = React.memo(({ sublessons }: IProps) => {
  const { allSublessonsStepperData, currentSublessonStepperData } =
    useGetLessonSidebarProgressStepperData(sublessons);
  console.log(allSublessonsStepperData, currentSublessonStepperData);

  return (
    <Flex
      direction="column"
      bgColor="#172A4E"
      color="white"
      textAlign="center"
      py="20px"
      flex={`${rem(115)} 0 0`}
    >
      <Heading size="md" mb={rem(25)}>
        Progress
      </Heading>
      <ProgressStepper title="Lesson" steps={allSublessonsStepperData} />
      <ProgressStepper title="Sublesson" steps={currentSublessonStepperData} />
      <VStack marginTop="auto" justifyContent="center" spacing="30px">
        <LessonExternalResources />
        <SyntaxHandbook />
      </VStack>
    </Flex>
  );
});

LessonSidebar.displayName = 'LessonSidebar';
