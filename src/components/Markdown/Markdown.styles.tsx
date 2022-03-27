import { chakra } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { rem } from 'src/styles/typography/font';

const taskListItemSelector = '.task-list-item';

export const StyledMarkdown = chakra(ReactMarkdown, {
  baseStyle: {
    lineHeight: 1.65,
    // TODO: expose these selectors programmatically so that external overrides are cleaner
    ' a': {
      color: '#172A4E',
      textDecoration: 'underline',
    },
    ' p': {
      fontSize: rem(16),
    },
    [` li:not(${taskListItemSelector})`]: {
      marginLeft: '11px',
      listStyleType: "'- '",
    },
    [taskListItemSelector]: {
      listStyleType: 'none',
    },
    'input[type="checkbox"]': {
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '> *:not(:last-child)': {
      marginBottom: rem(10),
    },
    ' code': {
      padding: `0 ${rem(3)}`,
      fontSize: '90%',
    },
    ' blockquote': {
      borderLeft: `${rem(3)} solid #d6d6d6`,
      backgroundColor: '#F9F9F9',
      padding: `${rem(10)}`,
    },
  },
});
