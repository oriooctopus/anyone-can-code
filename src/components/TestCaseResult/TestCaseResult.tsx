import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import CheckFailure from '../../assets/CheckFailure.svg';
import CheckSuccess from '../../assets/CheckSuccess.svg';
import {
  CheckCircleOutlined,
  MinusOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { rem } from 'src/styles/typography/font';

interface IProps {
  label: string;
  passed: boolean;
}

const getIcon = (passed: boolean | undefined) => {
  if (passed === undefined) {
    return <MinusOutlined style={{ fontSize: rem(24) }} />;
  } else if (passed) {
    return (
      <CheckCircleOutlined style={{ fontSize: rem(24), color: 'green' }} />
    );
  }

  return <CloseCircleOutlined style={{ fontSize: rem(24), color: 'red' }} />;
};

export const TestCaseResult = ({ label, passed }: IProps) => {
  return (
    <Flex align="center" mt="18px">
      {getIcon(passed)}
      <Text ml="5px">{label}</Text>
    </Flex>
  );
};

export default TestCaseResult;
