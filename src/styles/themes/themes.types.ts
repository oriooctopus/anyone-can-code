import { TextVariantsEnum } from '../typography/textVariants';

export enum ThemesEnum {
  DEFAULT_DARK = 'DEFAULT_DARK',
  // DEFAULT_LIGHT = 'LIGHT',
}

export type TextThemeVariantPropsType = {
  color: string;
};

export type TextThemeType = Record<TextVariantsEnum, TextThemeVariantPropsType>;

export type SublessonInstructionsThemeType = {
  backgroundColor: string;
};

export type ThemeType = {
  primaryColor: string;
  sublessonInstructions: SublessonInstructionsThemeType;
  text: TextThemeType;
};
