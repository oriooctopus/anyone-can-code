import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

interface ISidebarOverlayProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  title: React.ReactNode;
}

export const SidebarOverlayBase = ({
  children,
  footer,
  title,
}: ISidebarOverlayProps) => {
  return (
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>

      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalContent>
  );
};
