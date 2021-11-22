import { Box, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { FlLink } from 'components/Link/FlLink';
import { IProgressStepperProps } from 'components/ProgressStepper/ProgressStepper.types';
import {
  progressStepperColorStateMap,
  progressStepperItemSize,
} from 'components/ProgressStepper/ProgressStepper.utils';

export const ProgressStepper = ({ steps, title }: IProgressStepperProps) => (
  <Box>
    <Text>{title}</Text>
    <HStack justify="center" spacing="3px">
      {steps.map(({ hoverText, state, onClick }) => (
        <FlLink onClick={onClick}>
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
