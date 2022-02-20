import { Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { useEffect } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { PlaygroundDataFragment } from 'src/generated/graphql';
import { updateCurrentEditorValue } from 'src/state/lessonCompletion/lessonCompletion';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { StepButton, StepMarkdown } from 'components/Step/Step.styles';

export type PlaygroundProps = {
  step: FlattenStrapi<PlaygroundDataFragment>;
  nextButtonText: string;
  onClickNext: () => void;
};

export const Playground = ({
  step,
  nextButtonText,
  onClickNext,
}: PlaygroundProps) => {
  const { id, prompt } = step;

  useEffect(() => updateCurrentEditorValue(''), [id]);

  return (
    <>
      <Tooltip
        label="One of the most important ways to understand the concepts you learn is to play around with your code. Tweak it, change it just a little bit. A common quality in great programmers is curiosity and tinkering. We highly recommend NOT skipping this. It's one of the fastest ways to get better"
        placement="auto-end"
      >
        <HStack alignItems="center" spacing={2}>
          <Text fontStyle="italic" size="20px">
            Playground
          </Text>
          <IoMdInformationCircle />
        </HStack>
      </Tooltip>
      <StepMarkdown containerOverrides={{ flexGrow: 1 }}>{prompt}</StepMarkdown>
      <Flex spacing={6} mt="auto">
        <StepButton colorScheme="green" onClick={onClickNext} mr="20px">
          {nextButtonText}
        </StepButton>
      </Flex>
    </>
  );
};
