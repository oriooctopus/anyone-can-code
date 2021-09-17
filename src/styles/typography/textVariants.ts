import * as CSS from 'csstype';
import { styled } from 'linaria/react';
import { flFontWeight } from './font';

export type TextVariant = keyof typeof TextVariantsEnum;

export enum TextVariantsEnum {
  navLink = 'navLink',
  regularBody = 'regularBody',
  linkBody = 'linkBody',
  smallLabel = 'smallLabel',
  h2 = 'h2',
}

export type ITextPresets = {
  // the property names match the design terminology in the Abstract collection
  readonly tag?: keyof JSX.IntrinsicElements;
  readonly fontWeight?: number;
  readonly style?: string;
  readonly fontSize: number;
  readonly lineHeight?: number;
  readonly decoration?: string;
  readonly textTransform?: CSS.Property.TextTransform;
};

export const textVariants: Record<TextVariantsEnum, ITextPresets> = {
  navLink: {
    fontSize: 16,
    lineHeight: 18.75,
  },
  regularBody: {
    fontSize: 14,
    lineHeight: 14,
  },
  linkBody: {
    fontSize: 14,
    lineHeight: 14,
  },
  smallLabel: {
    fontWeight: flFontWeight.NORMAL_400,
    fontSize: 13,
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: 26,
  },
};