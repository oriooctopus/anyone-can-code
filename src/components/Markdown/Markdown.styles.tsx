import { chakra } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { rem } from 'src/styles/typography/font';

interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

export const InlineCode = ({
  children,
  className,
  ...props
}: InlineCodeProps) => (
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

export interface MultiLineCodeProps {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  theme: React.CSSProperties;
}

export const MultiLineCodeBlock = ({
  customStyle = {},
  theme,
  ...props
}: MultiLineCodeProps) => (
  <SyntaxHighlighter
    language={'js'}
    PreTag="div"
    customStyle={{
      borderRadius: 7,
      margin: `${rem(15)} 0`,
      ...customStyle,
    }}
    style={theme}
    wrapLongLines={true}
    {...props}
  />
);

export const StyledMarkdown = chakra(ReactMarkdown, {
  baseStyle: {
    lineHeight: 1.65,
    // TODO: expose these selectors programmatically so that external overrides are cleaner
    ' a': {
      color: '#172A4E',
      textDecoration: 'underline',
    },
    ' li': {
      listStyle: 'inside',
      listStyleType: "'- '",
    },
    '> *:not(:last-child)': {
      marginBottom: rem(10),
    },
    ' code': {
      padding: `0 ${rem(3)}`,
    },
    ' blockquote': {
      borderLeft:`${rem(3)} solid #d6d6d6`,
      backgroundColor:"#F9F9F9",
      padding:3,
    }
  },
});
