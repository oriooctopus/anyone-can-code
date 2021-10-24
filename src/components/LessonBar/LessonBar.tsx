import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { lessonMenuHeight } from 'src/styles/constants';
import { SidebarOverlay } from 'components/SidebarOverlays/SidebarOverlay/SidebarOverlay';

export const LessonBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgColor="#15141f"
      color="white"
      d="flex"
      alignItems="center"
      px="10px"
      height={lessonMenuHeight}
    >
      <Text onClick={onOpen}>Map</Text>
      {isOpen && <SidebarOverlay onClose={onClose} />}
    </Box>
  );
};
