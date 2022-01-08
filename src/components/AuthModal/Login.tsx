import { Formik } from 'formik';
import { InputControl } from 'formik-chakra-ui';
import { useState } from 'react';
import * as Yup from 'yup';
import { useLoginMutation } from 'src/generated/graphql';
import { useAuthToken } from 'src/state/authentication/authentication';
import { useAuthModalState } from 'src/state/general/general';
import { AuthModalWrappers } from 'components/AuthModal/AuthModal.styles';
import { FlLink } from 'components/Link/FlLink';

interface ILoginForm {
  username: string;
  password: string;
}

const initialValues: ILoginForm = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is a required field'),
  password: Yup.string().required('Password is a required field'),
});

export const Login = () => {
  const { openRegisterModal, closeAuthModal } = useAuthModalState();
  // TODO: improve submission error messages
  const [didSubmissionFail, setDidSubmissionFail] = useState(false);
  const { setAuthToken } = useAuthToken();
  const [loginMutation, { loading }] = useLoginMutation();

  // do I need to run removeAuthToken first before running this?
  const login = ({ password, username }: ILoginForm) =>
    loginMutation({
      variables: {
        input: {
          identifier: username,
          password,
          provider: 'local',
        },
      },
    })
      .then(({ data }) => {
        const jwt = data?.login?.jwt;

        if (jwt) {
          setAuthToken(jwt);
        } else {
          throw new Error('JWT is empty');
        }

        closeAuthModal();
      })
      .catch(() => setDidSubmissionFail(true));

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={login}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <AuthModalWrappers.Content onSubmit={handleSubmit}>
          <AuthModalWrappers.Title>Login</AuthModalWrappers.Title>
          <AuthModalWrappers.Subtitle>
            Don't have an account?&nbsp;
            <FlLink underline onClick={openRegisterModal}>
              Click here to register
            </FlLink>
          </AuthModalWrappers.Subtitle>
          <AuthModalWrappers.InputsWrapper>
            <InputControl name="username" label="Username" />
            <InputControl
              name="password"
              label="Password"
              inputProps={{
                type: 'password',
              }}
            />
          </AuthModalWrappers.InputsWrapper>
          <AuthModalWrappers.SubmitButton isLoading={loading}>
            Submit
          </AuthModalWrappers.SubmitButton>
          {didSubmissionFail && (
            <AuthModalWrappers.ErrorMessage>
              Invalid credentials, please try again
            </AuthModalWrappers.ErrorMessage>
          )}
        </AuthModalWrappers.Content>
      )}
    </Formik>
  );
};
