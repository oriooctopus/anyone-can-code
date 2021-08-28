import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import CheckFailure from '../../assets/CheckFailure.svg';
import CheckSuccess from '../../assets/CheckSuccess.svg';

interface IProps {
  label: string;
  passed: boolean;
}

export const TestCaseResult = ({ label, passed }: IProps) => {
  return (
    <Flex align="center" mt="18px">
      {passed ? <CheckSuccess /> : <CheckFailure />}
      <Text ml="5px">{label}</Text>
    </Flex>
  );
};

export default TestCaseResult;
