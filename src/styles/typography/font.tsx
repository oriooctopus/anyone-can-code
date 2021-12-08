import { round } from 'lodash';

export const BASE_FONT_FAMILY = 'roboto';

export const BASE_FONT_SIZE = 16;

export const flFontWeight = {
  LIGHT_300: 300 as const,
  NORMAL_400: 400 as const,
  SEMIBOLD_600: 600 as const,
  BOLD_800: 800 as const,
};

export function rem(px: number): string | number {
  // TODO: by default disable the calculation in production and then add some sort of flog to reenable if necessary in dev
  return `${px}px`;
  const remValue = round(px / BASE_FONT_SIZE, 3);
  return `${remValue}rem`;
}
