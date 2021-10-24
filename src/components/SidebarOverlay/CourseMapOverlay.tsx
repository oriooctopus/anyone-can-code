import { Box, Divider, Text } from '@chakra-ui/react';
import { SidebarOverlayContent } from 'components/SidebarOverlay/SidebarOverlay.styles';

const Module = () => (
  <Box>
    <Text>Module</Text>
    <Text>Introduction to variables</Text>
    <Text>Introduction to variables</Text>
    <Text>Introduction to variables</Text>
    <Text>Introduction to variables</Text>
  </Box>
);

export const CourseMapOverlay = () => {
  return (
    <SidebarOverlayContent>
      <Module />
      <Module />
    </SidebarOverlayContent>
  );
};
