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
  showCloseButton?: boolean;
  title?: React.ReactNode;
}

export const SidebarOverlayBase = ({
  children,
  footer,
  showCloseButton,
  title,
}: ISidebarOverlayProps) => {
  return (
    <ModalContent m={0} h="100%" mr="auto">
      {title && <ModalHeader>{title}</ModalHeader>}
      {showCloseButton && <ModalCloseButton />}
      <ModalBody p={0}>{children}</ModalBody>

      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalContent>
  );
};
