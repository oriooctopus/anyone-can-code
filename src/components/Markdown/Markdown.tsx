import { Box, BoxProps } from '@chakra-ui/layout';
import { FlLink } from 'components/Link/FlLink';
import {
  StyledMarkdown,
  InlineCode,
  MultiLineCodeBlock,
  MultiLineCodeProps,
} from 'components/Markdown/Markdown.styles';
import { stripNewlines } from 'components/Markdown/Markdown.utils';

export interface MarkdownProps {
  children: React.ReactNode;
  codeTheme?: any;
  containerOverrides?: BoxProps;
  // TODO: There must be an actual type made for this. Find that instead of recreating it
  markdownCSSOverrides?: Record<string, React.CSSProperties | string | number>;
  forceMultiLine?: boolean;
  multiLineCodePropOverrides?: Partial<MultiLineCodeProps>;
}

const Markdown = ({
  children: markdownChildren,
  codeTheme,
  forceMultiLine,
  multiLineCodePropOverrides = {},
  markdownCSSOverrides = {},
  containerOverrides = {},
}: MarkdownProps) => (
  <Box w="100%" {...containerOverrides}>
    <StyledMarkdown
      children={markdownChildren}
      cssOverrides={markdownCSSOverrides}
      components={{
        code({ node, inline, children, ...props }) {
          return inline && !forceMultiLine ? (
            <InlineCode {...props}>{children}</InlineCode>
          ) : (
            <MultiLineCodeBlock
              children={stripNewlines(children)}
              theme={codeTheme}
              {...props}
              {...multiLineCodePropOverrides}
            />
          );
        },
        a: ({ node, children, href, ...props }) => {
          return (
            <FlLink
              children={children[0]}
              {...props}
              href={href}
              target="_blank"
            />
          );
        },
      }}
    />
  </Box>
);

export default Markdown;