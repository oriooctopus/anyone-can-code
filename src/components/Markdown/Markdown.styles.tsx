import ReactMarkdown from 'react-markdown/react-markdown.min';
import styled from '@emotion/styled';
import { rem } from 'src/styles/typography/font';

export const StyledMarkdown = styled(ReactMarkdown)({
  ' li': {
    listStyle: 'inside',
    listStyleType: "'- '",
  },
  '> *': {
    marginBottom: rem(4),
  },
});
