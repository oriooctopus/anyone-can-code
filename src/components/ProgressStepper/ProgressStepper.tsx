import { Box, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import Menu from 'src/assets/Menu';
import { rem } from 'src/styles/typography/font';
import { ProgressStateEnum } from 'src/types/generalTypes';
import { FlLink } from 'components/Link/FlLink';
import {
  progressStepperColorStateMap,
  progressStepperItemSize,
} from 'components/ProgressStepper/ProgressStepper.utils';

const iconSize = 10;
const iconNegativeMargin = (iconSize + 8) * -1;

export interface IProgressStepperStep {
  hoverText?: string;
  state: ProgressStateEnum;
  onClick: () => void;
}

interface IProgressStepperProps {
  // showHoverActions: boolean;
  title: string;
  steps: Array<IProgressStepperStep>;
}

export const ProgressStepper = ({
  // showHoverActions,
  steps,
  title,
}: IProgressStepperProps) => (
  <Box p="5px">
    <Flex align="center" justify="center" mb={rem(10)}>
      {/* {showHoverActions && (
        <Box w={0}>
          <Menu
            color="white"
            boxSize={rem(iconSize)}
            marginLeft={rem(iconNegativeMargin)}
            marginTop="-1px"
          />
        </Box>
      )} */}
      <Text>{title}</Text>
    </Flex>
    <HStack justify="center" spacing="3px">
      {steps.map(({ hoverText, state, onClick }) => (
        <FlLink onClick={onClick} key={hoverText}>
          <Tooltip label={hoverText}>
            <Box
              w={progressStepperItemSize}
              h={progressStepperItemSize}
              borderRadius="50%"
              bgColor={progressStepperColorStateMap[state]}
            />
          </Tooltip>
        </FlLink>
      ))}
    </HStack>
  </Box>
);
