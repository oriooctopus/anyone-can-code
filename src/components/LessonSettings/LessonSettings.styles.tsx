import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react';
import { LessonSettingsButtonGroupOption } from 'components/LessonSettings/LessonSettings.types';

type ButtonGroupProps = {
  boxProps?: BoxProps;
  currentValue: unknown;
  label: string;
  onClick: (val: unknown) => void;
  options: Array<LessonSettingsButtonGroupOption>;
};

export const LessonSettingsButtonGroup = ({
  boxProps = {},
  currentValue,
  label,
  onClick,
  options,
}: ButtonGroupProps) => (
  <Box marginBottom="10px" {...boxProps}>
    <Text>{label}</Text>
    <HStack spacing={3}>
      {options.map(({ label, value }) => (
        <Button
          variant={currentValue === value ? 'solid' : 'ghost'}
          flex="1"
          key={label}
          onClick={() => onClick(value)}
        >
          {label}
        </Button>
      ))}
    </HStack>
  </Box>
);
