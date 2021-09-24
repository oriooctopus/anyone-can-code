import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  active?: boolean;
  percentCompleted: number;
}

type HexagonProps = {
  percentCompleted: number;
};

const Hexagon = ({ percentCompleted }: HexagonProps) => (
  <Box position="relative" mb="17px">
    <svg
      width="47"
      height="52"
      viewBox="0 0 47 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: 'auto' }}
    >
      <path
        d="M1 38.4104V13.5896L23.5 1.14281L46 13.5896V38.4104L23.5 50.8572L1 38.4104Z"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="2"
      />
    </svg>
    <Text
      position="absolute"
      fontSize="14px"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      {Math.round(percentCompleted)}%
    </Text>
  </Box>
);

const Triangle = ({ active }: { active?: boolean }) => (
  <Box
    position="absolute"
    borderTop="10px solid transparent"
    borderBottom="10px solid transparent"
    borderRight="10px solid #172A4E"
    left="-10.2px"
    top={active ? '35px' : '50%'}
    transform="translateY(-50%)"
  />
);

const SublessonCard = (props: IProps) => {
  const { children, active, percentCompleted } = props;
  console.log('percent completed', percentCompleted, props);
  return (
    <Box
      bgColor="#172A4E"
      borderRadius="12px"
      px="15px"
      py="10px"
      mb="30px"
      position="relative"
    >
      <Triangle active={active} />
      {active && <Hexagon percentCompleted={percentCompleted} />}
      <Text align="center" opacity={active ? '90%' : '62%'}>
        {children}
      </Text>
    </Box>
  );
};

export default SublessonCard;
