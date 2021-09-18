import { StackProps, TSpacing } from 'components/core/Stacks/Stack.types';
import styled from '@emotion/styled';
import { rem } from 'src/styles/typography/font';

/**
 * TODO SPARK-47730: Work with design to standardize on available spacings
 * Only really exported for use in storybook
 */
export const STACK_SPACINGS: Record<TSpacing, number> = {
  none: 0,
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

export const HStack = styled.div<StackProps>`
  display: flex;
  gap: ${({ spacing }) => rem(STACK_SPACINGS[spacing])};
`;
