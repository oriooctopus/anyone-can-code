import styled from '@emotion/styled';
import { FlText } from 'components/Typography/FlText';
import { themify } from 'src/styles/themes/theme';
import { rem } from 'src/styles/typography/font';
import { GridItem, GridItemProps } from '@chakra-ui/layout';

export const DefaultContentPanelGridItem = (props: GridItemProps) => (
  <GridItem
    colSpan={{
      lg: true ? 5 : 7,
      md: true ? 7 : 9,
    }}
    {...props}
  />
);

export const AnotherTest = styled.h1`
  text-transform: uppercase;
  background-color: ${({ color }) => color};
`;

export const SublessonInstructionsContainer = styled.div({
  padding: `${rem(20)} ${rem(20)} 0`,
  height: 'calc(100vh - 65px)',
  overflowY: 'scroll',
  ...themify((theme) => {
    return {
      backgroundColor: theme.sublessonInstructions.backgroundColor,
    };
  }),
});
