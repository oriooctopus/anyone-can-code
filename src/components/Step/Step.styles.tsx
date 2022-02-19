import { Button, ButtonProps } from '@chakra-ui/button';
import Markdown from 'components/Markdown/Markdown';
import { MarkdownProps } from 'components/Markdown/Markdown.types';

export const StepMarkdown = ({
  containerOverrides = {},
  ...props
}: MarkdownProps) => (
  <Markdown
    containerOverrides={{
      mb: '20px',
      mt: '10px',
      fontSize: '18px',
      ...containerOverrides,
    }}
    {...props}
  />
);

export const StepButton = (props: ButtonProps) => (
  <Button
    px="35px"
    py="25px"
    mt="auto"
    mb="30px"
    colorScheme="green"
    {...props}
  />
);
