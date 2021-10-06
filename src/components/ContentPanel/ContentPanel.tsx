import { Box, Divider } from '@chakra-ui/react';
import '@fontsource/roboto';
import { memo } from 'react';
import { ContentPanelNavigationIndicators } from 'components/ContentPanel/ContentPanelNavigationIndicators';
import { LessonSettings } from 'components/LessonSettings/LessonSettings';

type props = {
  onGoBack?: () => void | undefined;
  /*
   * Accessable by scrolling down below the mainContent. An arrow
   * is shown when secondaryContent exists to indicate to the user
   * that they need to scroll to access it
   */
  secondaryContent?: React.ReactNode;
  children: React.ReactNode;
  includeSettings?: boolean;
};

export const ContentPanel = memo(
  ({ includeSettings, children, onGoBack, secondaryContent }: props) => (
    <Box
      bgColor="white"
      p="20px 20px 0"
      // TODO: cleaner calculation instead of hardcoded 65px
      height="calc(100vh - 65px)"
      overflowY="scroll"
      position="relative"
    >
      {includeSettings && (
        <LessonSettings position="absolute" right="20px" top="15px" />
      )}
      <Box
        minHeight="calc(100vh - 80px)"
        d="flex"
        flexDir="column"
        alignItems="baseline"
      >
        {children}
        <ContentPanelNavigationIndicators
          onGoBack={onGoBack}
          scrollIndicator={Boolean(secondaryContent)}
          mb="20px"
        />
      </Box>
      {secondaryContent && (
        <>
          <Divider color="#D0D0D5" opacity="1" mb="20px" />
          {secondaryContent}
        </>
      )}
    </Box>
  ),
);
