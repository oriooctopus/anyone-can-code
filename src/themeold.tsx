import { createContext, useContext, useState } from 'react';

import { createTheming, ThemingType } from '@callstack/react-theme-provider';

export type Theme = {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  secondaryColor: string;
};

export const themes: { [key: string]: Theme } = {
  default: {
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#FFC777',
    textColor: '#504f4d',
    secondaryColor: '#7F5315',
  },
  dark: {
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#504f4d',
    textColor: '#FFC777',
    secondaryColor: '#252525',
  },
};

const {
  ThemeProvider: InternalThemeProvider,
  withTheme,
  useTheme,
}: ThemingType<Theme> = createTheming(themes.default);

type props = {
  children: React.ReactNode;
  theme: Theme;
};

const SetThemeContext = createContext(null);

const useSetTheme = () => {
  return useContext(SetThemeContext);
};

const ThemeProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState('default');

  return (
    <InternalThemeProvider theme={themes[theme]}>
      <SetThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </SetThemeContext.Provider>
    </InternalThemeProvider>
  );
};

export {
  ThemeProvider,
  InternalThemeProvider,
  withTheme,
  useTheme,
  useSetTheme,
};
