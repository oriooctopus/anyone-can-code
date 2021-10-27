import {
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import {
  useGetSidebarOverlay,
  useSidebarOverlayContext,
} from 'components/SidebarOverlays/SidebarOverlay.utils';
import { SidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlayContext';

export const SidebarOverlay = () => {
  const SidebarOverlayContent = useGetSidebarOverlay();
  const { setOverlayState } = useSidebarOverlayContext();

  if (!SidebarOverlayContent) {
    return null;
  }

  return (
    <Modal isOpen onClose={() => setOverlayState()}>
      <ModalOverlay />
      <SidebarOverlayContent />
    </Modal>
  );
};
