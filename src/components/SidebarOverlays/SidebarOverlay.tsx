import { ModalOverlay, Modal } from '@chakra-ui/react';
import {
  useGetSidebarOverlay,
  useSidebarOverlayContext,
} from 'components/SidebarOverlays/SidebarOverlay.utils';

export const SidebarOverlay = () => {
  const SidebarOverlayContent = useGetSidebarOverlay();
  const { setOverlayState } = useSidebarOverlayContext();
  const closeModal = () => setOverlayState();

  if (!SidebarOverlayContent) {
    return null;
  }

  return (
    <Modal isOpen onClose={closeModal} onEsc={closeModal}>
      <ModalOverlay />
      <span> what is above</span>
      <SidebarOverlayContent />
    </Modal>
  );
};
