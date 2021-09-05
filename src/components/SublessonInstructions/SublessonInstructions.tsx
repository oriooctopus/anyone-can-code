import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import TestCaseResult from '../TestCaseResult/TestCaseResult';
import { runTests } from '../../CodeRunning';

import '@fontsource/roboto';
import { useReactiveVar } from '@apollo/client';
import { codeEditorValueVar } from 'src/cache';
import { PageGetSublessonInstructionsDataComp } from 'src/generated/page';

const SublessonInstructions: PageGetSublessonInstructionsDataComp = ({
  data,
}) => {
  const {
    sublesson: { description, name, lesson, sublessonChallenges },
  } = data;
  console.log('yo', sublessonChallenges);
  const codeEditorValue = useReactiveVar(codeEditorValueVar);

  return (
    <Flex
      align="baseline"
      bgColor="white"
      direction="column"
      px="20px"
      h="calc(100vh - 65px)"
    >
      <Text
        casing="uppercase"
        color="#646466"
        fontSize="13px"
        mb="10px"
        mt="20px"
      >
        {lesson?.name}
      </Text>
      <Heading as="h1" fontSize="26px" fontWeight="400" mb="30px">
        {name}
      </Heading>
      <Box minH="300">
        <Text as="p" fontSize="18px">
          {description}
        </Text>
        {/* <Text as="pre" mt="15px">
          5 + 5
        </Text> */}
      </Box>
      <Box mt="auto" w="100%">
        <Divider color="#D0D0D5" opacity="1" />
        {}
        {/* <TestCaseResult passed label="Log 10 + 10 to the console" /> */}
        <Button
          colorScheme="green"
          px="35px"
          py="25px"
          mt="50px"
          mb="35px"
          onClick={() =>
            runTests(codeEditorValue, [
              {
                name: "the variable 'agwefwefwefe' is defined",
                testString: "typeof agwefwefwefe !== 'undefined'",
              },
              {
                name: "the variable 'age' is defined",
                testString: "typeof age !== 'undefined'",
              },
              // {
              //   name: "age is a number",
              //   testString: "assert(typeof age === 'number')",
              // },
            ])
          }
        >
          Next
        </Button>
      </Box>
    </Flex>
  );
};

export default SublessonInstructions;
