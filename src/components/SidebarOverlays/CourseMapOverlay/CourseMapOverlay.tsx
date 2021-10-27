import { Box, Text } from '@chakra-ui/react';
import { SidebarOverlayBase } from 'components/SidebarOverlays/SidebarOverlayBase/SidebarOverlayBase';

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
    <SidebarOverlayBase title="Course Map">
      <Module />
      <Module />
    </SidebarOverlayBase>
  );
};
