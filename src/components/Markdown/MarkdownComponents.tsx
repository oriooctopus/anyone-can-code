import { noop } from 'lodash';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { rem } from 'src/styles/typography/font';
import { MarkdownComponentHandler } from 'components/Markdown/Markdown.types';

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

interface CheckboxProps
  extends Omit<MarkdownComponentHandler<'input'>, 'node'> {
  onCheckboxToggle: (value: boolean) => void;
}

export const Checkbox = ({ onCheckboxToggle, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);



  return (
    <input
      {...props}
      onChange={(e) => {
        const isChecked = e.target.checked;
        setIsChecked(isChecked);
        return onCheckboxToggle(isChecked);
      }}
      type="checkbox"
      checked={isChecked}
      disabled={false}
    />
  );
};

export const getMarkdownInputComponent =
  (onCheckboxToggle: (value: boolean) => void = noop) =>
  ({ node, ...props }: MarkdownComponentHandler<'input'>) => {
    if (props.type === 'checkbox') {
      return <Checkbox onCheckboxToggle={onCheckboxToggle} {...props} />;
    }

    return <input {...props} />;
  };

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
