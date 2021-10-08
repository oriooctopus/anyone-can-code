import { Button, ButtonProps } from '@chakra-ui/button';
import Markdown, { MarkdownProps } from 'components/Markdown/Markdown';

export const ChallengeMarkdown = (props: MarkdownProps) => (
  <Markdown mb="20px" fontSize="18px" {...props} />
);

export const ChallengeButton = (props: ButtonProps) => (
  <Button
    px="35px"
    py="25px"
    mt="auto"
    mb="30px"
    colorScheme="green"
    {...props}
  />
);
