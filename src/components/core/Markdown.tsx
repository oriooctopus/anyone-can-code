import ReactMarkdown from 'react-markdown/react-markdown.min';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type MarkdownProps = {
  children: React.ReactNode;
};

const Markdown = ({ children: test }) => (
  <ReactMarkdown
    children={test}
    components={{
      code({ node, inline, className, children, ...props }) {
        console.log('does this ever happen?');
        const match = /language-(\w+)/.exec(className || '');
        debugger;
        return !inline ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={prism}
            language={'js'}
            PreTag="div"
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
