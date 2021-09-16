import { TextVariant } from 'src/styles/typography/textVariants';
import { withLinaria } from 'src/utils/typescriptUtils';

export interface IFlTextProps extends withLinaria {
  children: React.ReactNode;
  variant: TextVariant;
}
