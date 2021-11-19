import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { ChallengeHintFragment } from 'src/generated/graphql';
import Markdown from 'components/Markdown/Markdown';

interface IChallengeHintProps {
  hints: Array<ChallengeHintFragment>;
}

export const ChallengeHints: React.FC<IChallengeHintProps> = ({ hints }) => {
  return (
    <Box>
      <Heading size="md" mr="auto">
        Hints
      </Heading>
      <Accordion my={4} allowMultiple>
        {hints.map(({ recommendedTimeBeforeViewing, text }, index) => (
          <AccordionItem>
            <AccordionButton pl={1}>
              <Text mr="auto">Hint {index}</Text>
              {/* TODO: Implement recommended time before viewing */}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex>
                <Markdown>{text}</Markdown>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
