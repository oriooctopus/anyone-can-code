import { createContext, useContext } from 'react';
import { ThemesEnum } from 'src/styles/themes/themes.types';

type ThemeType = {
  primaryColor: string;
};

const themes: Record<ThemesEnum, ThemeType> = {
  DEFAULT: {
    primaryColor: 'blue',
  },
  DARK: {
    primaryColor: 'pink',
  },
};

export const themeStyles = (cb: (theme: ThemeType) => Record<any, any>) =>
  Object.keys(themes).reduce(
    (acc, name) =>
      Object.assign(acc, {
        [`.theme-${name} &`]: cb(themes[name]),
      }),
    {},
  );

export const ThemeContext = createContext<{
  appTheme?: ThemesEnum | null;
  setAppTheme?: (theme: ThemesEnum | null) => void;
}>({});

/**
 * Hook for getting and setting application theme
 */
export const useAppTheme: () => [
  ThemesEnum,
  (theme: ThemesEnum | null) => void,
] = () => {
  const { appTheme, setAppTheme } = useContext(ThemeContext);

  if (!appTheme || !setAppTheme) {
    throw new Error('useAppTheme used outside RkGlobalThemeProvider');
  }

  return [appTheme, setAppTheme];
};
