import { TextThemeVariantPropsType } from 'src/styles/themes/themes.types';
import { rem } from 'src/styles/typography/font';
import { ITextPresets, textVariants } from 'src/styles/typography/textVariants';
import { objMap } from 'src/utils/general';
import { flFontWeight } from 'src/styles/typography/font';

/**
 * Generate style properties for the base text.
 */
export const generateTextStyles = (
  presets: ITextPresets & TextThemeVariantPropsType,
): React.CSSProperties => {
  const { fontWeight, fontSize, lineHeight, color, textTransform } = presets;

  return {
    fontWeight: fontWeight || flFontWeight.NORMAL_400,
    fontSize: rem(fontSize),
    color,
    lineHeight: rem(lineHeight),
    textTransform,
  };
};

export const flBaseTextVariantStyles = objMap(
  textVariants,
  (variant, styles) => [`&.${variant}`, generateTextStyles(styles)],
);
