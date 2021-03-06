import {
  CheckCircleOutlined,
  MinusOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { Flex } from '@chakra-ui/layout';
import { FlexProps } from '@chakra-ui/react';
import React from 'react';
import { rem } from 'src/styles/typography/font';
import Markdown from 'components/Markdown/Markdown';

interface IProps {
  label: string;
  passed: boolean;
  containerStyles?: FlexProps;
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

export const TestCaseResult = ({
  containerStyles = {},
  label,
  passed,
}: IProps) => (
  <Flex align="center" {...containerStyles}>
    {getIcon(passed)}
    <Markdown containerOverrides={{ ml: '12px' }}>{label}</Markdown>
  </Flex>
);

export default TestCaseResult;
