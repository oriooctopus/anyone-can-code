import styled from '@emotion/styled';
import { BASE_FONT_FAMILY } from 'src/styles/typography/font';
import { textVariants } from 'src/styles/typography/textVariants';
import { useTheme } from 'src/styles/themes/theme';
import { IFlTextProps } from './FlText.types';
import { flBaseTextVariantStyles } from './textUtils';

export const useCoreTextStyles = ({
  variant = 'regularBody',
}: IFlTextProps) => {
  const theme = useTheme();

  return {
    ...textVariants[variant],
    ...theme.text[variant],
  };
};

export const BaseText = styled.span`
  margin: 0;
  padding: 0;
  font-family: ${BASE_FONT_FAMILY};
  ${flBaseTextVariantStyles};
`;
