import { LinkProps } from 'next/link';
import { TextVariant } from 'src/styles/typography/textVariants';
import { withLinaria } from 'src/utils/typescriptUtils';

export interface IFlLinkProps extends LinkProps, withLinaria {
  variant: TextVariant;
}
