import { TextVariantsEnum } from '../typography/textVariants';

export enum ThemesEnum {
  DEFAULT_DARK = 'DEFAULT',
  // DEFAULT_LIGHT = 'LIGHT',
}

export type TextThemeType = Record<
  TextVariantsEnum,
  {
    color: string;
  }
>;

export type ThemeType = {
  primaryColor: string;
  text: TextThemeType;
};
