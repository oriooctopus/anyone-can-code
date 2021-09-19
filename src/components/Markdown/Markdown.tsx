import { StyledMarkdown } from 'components/Markdown/Markdown.styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type MarkdownProps = {
  children: React.ReactNode;
};

const Markdown = ({ children: test }) => (
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
            }}
            {...props}
          />
        ) : (
          <code
            style={{
              border: '1.6px solid rgba(0,0,0,.1)',
              borderRadius: '6.4px',
              fontFamily: 'monospace',
              backgroundColor: 'rgb(246, 247, 248)',
              padding: '1.6px',
            }}
            className={className}
            {...props}
          >
            {children}
          </code>
        );
      },
    }}
  />
);

export default Markdown;
