import { round } from 'lodash';

export const BASE_FONT_FAMILY = 'roboto';

export const BASE_FONT_SIZE = 16;

export const flFontWeight = {
  LIGHT_300: 300 as 300,
  NORMAL_400: 400 as 400,
  SEMIBOLD_600: 600 as 600,
  BOLD_800: 800 as 800,
};

export function rem(px: number): string {
  const remValue = round(px / BASE_FONT_SIZE, 3);
  return `${remValue}rem`;
}
