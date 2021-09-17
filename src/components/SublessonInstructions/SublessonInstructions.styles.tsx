import { FlText } from 'components/core/Typography/FlText';
import { styled } from 'linaria/react';
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

export const SublessonInstructionsContainer = styled.div`
  margin-left: ${rem(20)};

  ${themify((theme) => ({
    aTest: 'ewfwe',
    backgroundColor: theme.aTest,
  }))}
`;

export const SublessonName = styled(FlText)`
  margin-top: ${rem(10)};
`;
// ${themeStyles((props) => ({
//   color: props.theme?.primaryColor,
// }))};
