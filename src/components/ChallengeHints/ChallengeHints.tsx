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
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import Markdown from 'components/Markdown/Markdown';

interface IChallengeHintProps {
  hints: FlattenStrapi<Array<ChallengeHintFragment>>;
}

export const ChallengeHints = ({ hints }: IChallengeHintProps) => {
  return (
    <Box>
      <Heading size="md" mr="auto">
        Hints
      </Heading>
      <Accordion my={4} allowMultiple>
        {hints.map(({ text }, index) => (
          <AccordionItem key={text}>
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
