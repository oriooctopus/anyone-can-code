/* eslint-disable */
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
  children: string;
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
}: MarkdownProps) => {
  console.log('markdown', markdownCSSOverrides) 
  return (
    <Box w="100%" {...containerOverrides}>
      <StyledMarkdown
        children={markdownChildren}
        sx={markdownCSSOverrides}
        components={{
          img({ src, ...props }) {
            // TODO: Make this more dynamic once you migrate to v4 of strapi
            return <img src={`http://localhost:1337${src}`} {...props} />;
          },
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
};

export default Markdown;
