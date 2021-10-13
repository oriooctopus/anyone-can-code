import { Box, Button, Text } from '@chakra-ui/react';
import {
  default as defaultTheme,
  darcula,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { rem } from 'src/styles/typography/font';
import Markdown from 'components/Markdown/Markdown';

interface IProps {
  incorrectChoiceExplanation: string;
  isOptionSelected: boolean;
  showOptionIncorrectExplanation: boolean;
  useMarkdown: boolean;
  onClickOption: () => void;
  text: string;
}

/*
 * TODO: Create matching syntax highlighting theme
 *
 * Ideally we want the color to match with our blue, but right now we are using
 * a generic syntax highlighting theme and have to match it to that
 */
const SELECTED_OPTION_BACKGROUND_COLOR = '#2b2b2b'; // '#192A4E';

export const MultipleChoiceChallengeOption: React.FC<IProps> = ({
  incorrectChoiceExplanation,
  isOptionSelected,
  onClickOption,
  showOptionIncorrectExplanation,
  text,
  useMarkdown,
}) => {
  const color = isOptionSelected ? 'white' : 'black';

  return (
    <Box mb={showOptionIncorrectExplanation ? '5px' : '15px'} w="100%">
      <Button
        w="100%"
        bgColor={
          isOptionSelected ? SELECTED_OPTION_BACKGROUND_COLOR : '#F4F2F0'
        }
        color={color}
        // TODO: it feels dirty to have to override the hover like this. Probably need to create a variant
        _hover={{ color }}
        fontWeight="normal"
        d="flex"
        outline="none"
        border="1px solid #6A6A6A"
        onClick={onClickOption}
        key={text}
        {...(useMarkdown
          ? {
              height: '100%',
              padding: 0,
              textAlign: 'left',
            }
          : {
              py: '22px',
            })}
      >
        {useMarkdown ? (
          <Markdown
            codeTheme={isOptionSelected ? darcula : defaultTheme}
            forceMultiLine
            markdownCSSOverrides={{
              '> *': {
                marginBottom: 0,
              },
              marginTop: 0,
            }}
            multiLineCodePropOverrides={{
              customStyle: {
                margin: 0,
                padding: `${rem(12)} ${rem(10)}`,
              },
            }}
          >
            {text}
          </Markdown>
        ) : (
          text
        )}
      </Button>
      {showOptionIncorrectExplanation && (
        <Text color="red" fontSize="14px" mt="2px">
          {incorrectChoiceExplanation}
        </Text>
      )}
    </Box>
  );
};
