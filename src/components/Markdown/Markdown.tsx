import { Box, BoxProps } from '@chakra-ui/layout';
import clsx from 'clsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { rem } from 'src/styles/typography/font';
import { FlLink } from 'components/Link/FlLink';
import { StyledMarkdown } from 'components/Markdown/Markdown.styles';

export interface MarkdownProps extends BoxProps {
  children: React.ReactNode;
  codeTheme?: any;
}

const Markdown = ({
  children: test,
  codeTheme,
  ...styleProps
}: MarkdownProps) => (
  <Box {...styleProps} className="test" w="100%">
    <StyledMarkdown
      children={test}
      components={{
        code({ node, inline, className, children, ...props }) {
          return !inline ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={'js'}
              PreTag="div"
              customStyle={{
                borderRadius: 7,
                margin: `${rem(15)} 0`,
              }}
              style={codeTheme}
              {...props}
            />
          ) : (
            <code
              style={{
                border: '1.6px solid rgba(0,0,0,.1)',
                borderRadius: '6.4px',
                fontFamily: 'monospace',
                backgroundColor: 'rgb(246, 247, 248)',
              }}
              className={className}
              {...props}
            >
              {children}
            </code>
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
