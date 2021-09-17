import { TextVariantsEnum } from '../typography/textVariants';

export enum ThemesEnum {
  DEFAULT_DARK = 'DEFAULT',
  // DEFAULT_LIGHT = 'LIGHT',
}

export type TextThemeVariantPropsType = {
  color: string;
};

export type TextThemeType = Record<TextVariantsEnum, TextThemeVariantPropsType>;

export type ThemeType = {
  primaryColor: string;
  text: TextThemeType;
};
