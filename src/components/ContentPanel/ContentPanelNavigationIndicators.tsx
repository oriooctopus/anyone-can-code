import { Box, BoxProps, Text, TextProps } from '@chakra-ui/react';
import React from 'react';
import DownArrow from 'src/assets/DownArrow.svg';
import LeftArrow from 'src/assets/LeftArrow.svg';

type TProps = {
  onGoBack: () => void;
  scrollIndicator: boolean;
} & BoxProps;

type IndicatorTextProps = TextProps;

const IndicatorText = (props: IndicatorTextProps) => (
  <Text color="#646466" opacity="70%" fontSize="14px" {...props} />
);

export const ContentPanelNavigationIndicators = ({
  onGoBack,
  scrollIndicator,
  ...containerProps
}: TProps) => (
  <Box
    d="flex"
    justifyContent="space-between"
    w="100%"
    // h="25px"
    {...containerProps}
  >
    {onGoBack && (
      <Box as="button" d="flex" alignItems="center" onClick={onGoBack}>
        {/* this is probably better as png/jpg since it's cached */}
        <LeftArrow />
        <IndicatorText ml="7px">Go Back</IndicatorText>
      </Box>
    )}
    {scrollIndicator && (
      <Box ml="auto" d="flex" alignItems="center">
        <IndicatorText mr="12px">Scroll for lesson text</IndicatorText>
        <DownArrow />
      </Box>
    )}
  </Box>
);
