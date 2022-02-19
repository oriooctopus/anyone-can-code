import { BoxProps } from '@chakra-ui/react';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import { MultiLineCodeProps } from 'components/Markdown/MarkdownComponents';

export type MarkdownComponentHandler<Element extends ElementType> =
  ComponentPropsWithoutRef<Element> & ReactMarkdownProps;

export interface MarkdownProps {
  children: string;
  codeTheme?: any;
  components?: ReactMarkdownOptions['components'];
  containerOverrides?: BoxProps;
  // TODO: There must be an actual type made for this. Find that instead of recreating it
  markdownCSSOverrides?: Record<string, React.CSSProperties | string | number>;
  forceMultiLine?: boolean;
  multiLineCodePropOverrides?: Partial<MultiLineCodeProps>;
}
