import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuthToken } from 'src/state/authentication/authentication';
import { useAuthModalState } from 'src/state/general/general';
import { AuthModalStateEnum } from 'src/state/general/general.types';
import { Login } from 'components/AuthModal/Login';
import { Register } from 'components/AuthModal/Register';

// next thing to do is implement the user query and check that everything worked
export const AuthModal = () => {
  const { cookie } = useAuthToken();
  const { authModalState, openLoginModal, closeAuthModal } =
    useAuthModalState();

  useEffect(() => {
    // TODO: This is probably not enough
    if (!cookie) {
      openLoginModal();
    }
  }, []);

  const isModalOpen = authModalState !== AuthModalStateEnum.NOT_OPEN;

  return (
    <Modal isOpen={isModalOpen} onClose={() => {}}>
      <ModalOverlay />
      {authModalState === AuthModalStateEnum.LOGIN ? <Login /> : <Register />}
    </Modal>
  );
};
