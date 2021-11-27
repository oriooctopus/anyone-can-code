import { Box, Divider, Text } from '@chakra-ui/react';
import '@fontsource/roboto';
import { memo, useEffect, useRef } from 'react';
import { contentPanelScrollToTopFunctionVar } from 'src/cache';
import { lessonMenuHeight, mainNavbarHeight } from 'src/styles/constants';
import { rem } from 'src/styles/typography/font';
import { ContentPanelNavigationIndicators } from 'components/ContentPanel/ContentPanelNavigationIndicators';
import { LessonSettings } from 'components/LessonSettings/LessonSettings';

type props = {
  onGoBack?: () => void | undefined;
  /*
   * Accessible by scrolling down below the mainContent. An arrow
   * is shown when secondaryContent exists to indicate to the user
   * that they need to scroll to access it
   */
  secondaryContent?: React.ReactNode;
  children: React.ReactNode;
  includeSettings?: boolean;
};

const ContentPanelHeight = `calc(100vh - ${rem(mainNavbarHeight)} - ${rem(
  lessonMenuHeight + 5,
)})`;

export const ContentPanel = memo(
  ({ includeSettings, children, onGoBack, secondaryContent }: props) => {
    const containerRef = useRef(null);

    useEffect(() => {
      contentPanelScrollToTopFunctionVar(() =>
        containerRef?.current?.scrollTo(0, 0),
      );
    }, []);

    return (
      <Box
        bgColor="white"
        p="20px 20px 0"
        height={ContentPanelHeight}
        overflowY="scroll"
        position="relative"
        borderRadius="16px"
        css={{
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'lightgray',
            border: '8px solid transparent',
            borderRadius: '16px',
            backgroundClip: 'padding-box',
          },
          '&::-webkit-scrollbar': {
            width: '24px',
          },
        }}
        ref={containerRef}
      >
        {includeSettings && (
          <LessonSettings position="absolute" right="20px" top="15px" />
        )}
        <Box minHeight="100%" d="flex" flexDir="column" alignItems="baseline">
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
    );
  },
);
