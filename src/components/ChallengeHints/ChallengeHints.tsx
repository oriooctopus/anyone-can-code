import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Heading,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { ChallengeHintFragment } from 'src/generated/graphql';
import Markdown from 'components/Markdown/Markdown';

interface IChallengeHintProps {
  hints: Array<ChallengeHintFragment>;
}

export const ChallengeHints: React.FC<IChallengeHintProps> = ({ hints }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <AccordionButton px={1} py={2} mx={-1}>
          <Heading size="md" mr="auto">
            Hints
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Accordion allowMultiple>
            {hints.map(({ recommendedTimeBeforeViewing, text }, index) => (
              <AccordionItem>
                <AccordionButton>
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
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
