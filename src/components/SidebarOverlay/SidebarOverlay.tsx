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
import { useContext } from 'react';
import { SidebarOverlayContext } from 'components/SidebarOverlays/SidebarOverlay/SidebarOverlayContext';

interface ISidebarOverlayProps {
  onClose: () => void;
}

export const SidebarOverlay = ({ onClose }: ISidebarOverlayProps) => {
  const { overlayState, setOverlayState } = useContext(SidebarOverlayContext);

  return (
    <Modal isOpen={Boolean(overlayState)} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>wefwiejifowej</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
