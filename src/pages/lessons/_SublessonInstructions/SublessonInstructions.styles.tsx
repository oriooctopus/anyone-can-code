import styled from '@emotion/styled';
import { FlText } from 'components/Typography/FlText';
import { themify } from 'src/styles/themes/theme';
import { rem } from 'src/styles/typography/font';
// import { useTheme, themeStyles } from '../../theme/theme.tsx';

// type AnotherTestProps = {
//   color: string;
// };

export const AnotherTest = styled.h1`
  text-transform: uppercase;
  background-color: ${({ color }) => color};
`;

export const SublessonInstructionsContainer = styled.div({
  padding: `${rem(20)} ${rem(20)} 0`,
  height: 'calc(100vh - 65px)',
  overflowY: 'scroll',
  ...themify((theme) => {
    console.log('the theme', theme);
    return {
      backgroundColor: theme.sublessonInstructions.backgroundColor,
    };
  }),
});

export const SublessonName = styled(FlText)({
  marginTop: rem(10),
  marginBottom: rem(30),
});
