import { Box } from '@chakra-ui/layout';
import remarkGfm from 'remark-gfm';
import { getBaseUrl } from 'src/utils/general';
import { FlLink } from 'components/Link/FlLink';
import { StyledMarkdown } from 'components/Markdown/Markdown.styles';
import { MarkdownProps } from 'components/Markdown/Markdown.types';
import { stripNewlines } from 'components/Markdown/Markdown.utils';
import {
  InlineCode,
  MultiLineCodeBlock,
  getMarkdownInputComponent,
} from 'components/Markdown/MarkdownComponents';

const Markdown = ({
  children: markdownChildren,
  components,
  codeTheme,
  forceMultiLine,
  multiLineCodePropOverrides = {},
  markdownCSSOverrides = {},
  containerOverrides = {},
}: MarkdownProps) => {
  return (
    <Box w="100%" {...containerOverrides}>
      <StyledMarkdown
        children={markdownChildren}
        remarkPlugins={[remarkGfm]}
        sx={markdownCSSOverrides}
        components={{
          img({ src, ...props }) {
            const backendUrl = process.env.backendUrl;

            if (!backendUrl) {
              throw new Error('No backend URL');
            }

            return <img src={`${backendUrl}${src}`} {...props} />;
          },
          code({ inline, children, ...props }) {
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
          input: getMarkdownInputComponent(),
          ...components,
        }}
      />
    </Box>
  );
};

export default Markdown;
