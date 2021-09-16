import { styled } from 'linaria/react';
// import { useTheme, themeStyles } from '../../theme/theme.tsx';

// type AnotherTestProps = {
//   color: string;
// };

export const AnotherTest = styled.h1`
  text-transform: uppercase;
  background-color: ${({ color }) => color};
`;
// ${themeStyles((props) => ({
//   color: props.theme?.primaryColor,
// }))};
