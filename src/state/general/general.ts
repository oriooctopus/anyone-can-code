import { useReactiveVar } from '@apollo/client';
import { authModalStateVar } from 'src/state/general/general.reactiveVariables';
import { AuthModalStateEnum } from 'src/state/general/general.types';

export const useAuthModalState = () => {
  const authModalState = useReactiveVar(authModalStateVar);

  return {
    openLoginModal: () => authModalStateVar(AuthModalStateEnum.LOGIN),
    openRegisterModal: () => authModalStateVar(AuthModalStateEnum.REGISTER),
    closeAuthModal: () => authModalStateVar(AuthModalStateEnum.NOT_OPEN),
    authModalState,
  };
};
