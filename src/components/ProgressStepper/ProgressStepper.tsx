import { Box, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { rem } from 'src/styles/typography/font';
import { ProgressStateEnum } from 'src/types/generalTypes';
import { FlLink } from 'components/Link/FlLink';
import {
  progressStepperColorStateMap,
  progressStepperItemSize,
} from 'components/ProgressStepper/ProgressStepper.utils';

export interface IProgressStepperStep {
  hoverText?: string;
  state: ProgressStateEnum;
  onClick: () => void;
}

interface IProgressStepperProps {
  title: string;
  steps: Array<IProgressStepperStep>;
}

export const ProgressStepper = ({ steps, title }: IProgressStepperProps) => {
  return (
    <Box p="5px">
      <Flex align="center" justify="center" mb={rem(10)}>
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
};
