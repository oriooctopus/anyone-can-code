import * as CSS from 'csstype';
import { flFontWeight } from './font';

export type TextVariant = keyof typeof TextVariantsEnum;

export enum TextVariantsEnum {
  navLink = 'navLink',
  regularBody = 'regularBody',
  linkBody = 'linkBody',
}

export interface ITextPresets {
  // the property names match the design terminology in the Abstract collection
  readonly tag?: keyof JSX.IntrinsicElements;
  readonly fontWeight: number;
  readonly style?: string;
  readonly fontSize: number;
  readonly lineHeight?: number;
  readonly decoration?: string;
  readonly textTransform?: CSS.Property.TextTransform;
}

export const textVariants: Record<TextVariantsEnum, ITextPresets> = {
  [TextVariantsEnum.navLink]: {
    fontWeight: flFontWeight.NORMAL_400,
    fontSize: 16,
    lineHeight: 18.75,
  },
  [TextVariantsEnum.regularBody]: {
    fontWeight: flFontWeight.NORMAL_400,
    fontSize: 14,
    lineHeight: 14,
  },
  [TextVariantsEnum.linkBody]: {
    fontWeight: flFontWeight.NORMAL_400,
    fontSize: 14,
    lineHeight: 14,
  },
};
