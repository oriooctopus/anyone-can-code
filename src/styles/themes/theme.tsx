import { createContext, useContext } from 'react';
import { ThemesEnum, ThemeType } from 'src/styles/themes/themes.types';
import { themeDefaultDark } from './defaultDark/defaultDark';

const themes: Record<ThemesEnum, ThemeType> = {
  DEFAULT_DARK: themeDefaultDark,
  // [ThemesEnum.DEFAULT_LIGHT]: {
  //   primaryColor: 'pink',
  // },
};

export const themify = (cb: (theme: ThemeType) => Record<any, any>) =>
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
export const useSetTheme: () => (theme: ThemesEnum | null) => void = () => {
  const { setAppTheme } = useContext(ThemeContext);

  if (!setAppTheme) {
    throw new Error('useTheme used outside RkGlobalThemeProvider');
  }

  return setAppTheme;
};

export const useTheme = (): ThemeType => {
  const { appTheme } = useContext(ThemeContext);

  return themes[appTheme];
};
