import { useApolloClient } from '@apollo/client';
import { useCookies } from 'react-cookie';

const AUTH_TOKEN_COOKIE_NAME = 'authToken';

export const useAuthToken = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    AUTH_TOKEN_COOKIE_NAME,
  ]);
  const setAuthToken = (authToken: string) =>
    setCookie(AUTH_TOKEN_COOKIE_NAME, authToken);
  const removeAuthToken = () => removeCookie(AUTH_TOKEN_COOKIE_NAME);

  return {
    cookie: cookies[AUTH_TOKEN_COOKIE_NAME],
    setAuthToken,
    removeAuthToken,
  };
};

export const useLogout = () => {
  const { removeAuthToken } = useAuthToken();
  const apolloClient = useApolloClient();

  return async () => {
    await apolloClient.clearStore();
    console.log('removing token');
    removeAuthToken();
    location.reload();
  };
};
