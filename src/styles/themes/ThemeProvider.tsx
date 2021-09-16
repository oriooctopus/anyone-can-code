/* eslint-disable no-restricted-imports */ // Banning @material-ui does not apply to infrastructure
import { useState, useEffect, useRef } from 'react';
import { ThemeContext } from 'src/styles/themes/theme';
import {
  getLocalStorageValue,
  removeLocalStorageValue,
  setLocalStorageValue,
} from 'src/utils/localstorage';
import { LOCAL_STORAGE_KEYS } from 'src/App.constants';
import { ThemesEnum } from 'src/styles/themes/themes.types';

/**
 * Returns the application-wide theme provider.
 *
 * Themes are user specific, and are read from the user settings,
 * which are set in local storage.
 *
 * Defaults to auto-detecting the OS theme if no theme is set for the user.
 */
export const ThemeProvider: React.FC = ({ children }) => {
  const systemTheme = useOperatingSystemTheme();
  const [appTheme, setAppTheme] = useState(
    getLocalStorageValue(LOCAL_STORAGE_KEYS.APP_THEME) ??
      // Auto-detect OS theme
      systemTheme,
  );

  useEffect(() => {
    const handleLocalStorageThemeUpdate = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) return;

      if (event.key === LOCAL_STORAGE_KEYS.APP_THEME) {
        if (!appTheme) {
          removeLocalStorageValue(LOCAL_STORAGE_KEYS.APP_THEME);
        } else {
          setLocalStorageValue(LOCAL_STORAGE_KEYS.APP_THEME, appTheme);
        }
      }
    };

    if (typeof window === 'undefined') return;

    window.addEventListener('storage', handleLocalStorageThemeUpdate);

    return () => {
      window.removeEventListener('storage', handleLocalStorageThemeUpdate);
    };
  }, [appTheme]);

  console.log('ok so this actually happens right', appTheme);

  return (
    <ThemeContext.Provider value={{ appTheme, setAppTheme }}>
      <div className={`theme-${appTheme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

/**
 * Get the Operating System's preferred theme
 */
const useOperatingSystemTheme = (): ThemesEnum => {
  return ThemesEnum.DEFAULT_DARK;
  if (typeof window === 'undefined') {
  }

  const queryRef = useRef(window.matchMedia('(prefers-color-scheme: dark)'));
  const [isDarkPreferred, setIsDarkPreferred] = useState(
    queryRef.current.matches,
  );

  useEffect(() => {
    const query = queryRef.current;
    const listener = (e: MediaQueryListEvent) => {
      setIsDarkPreferred(e.matches);
    };
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, [queryRef]);

  return isDarkPreferred ? ThemesEnum.DEFAULT_DARK : ThemesEnum.DEFAULT_LIGHT;
};
