import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown/react-markdown.min';
import { rem } from 'src/styles/typography/font';

export const StyledMarkdown = styled(ReactMarkdown)({
  marginTop: rem(10),
  lineHeight: 1.65,
  ' a': {
    color: '#172A4E',
    textDecoration: 'underline',
  },
  ' li': {
    listStyle: 'inside',
    listStyleType: "'- '",
  },
  '> *': {
    marginBottom: rem(10),
  },
  ' code': {
    padding: `0 ${rem(3)}`,
  },
});
