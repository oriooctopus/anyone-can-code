import { Formik } from 'formik';
import { InputControl } from 'formik-chakra-ui';
import { useState } from 'react';
import * as Yup from 'yup';
import { useRegisterMutation } from 'src/generated/graphql';
import { useAuthToken } from 'src/state/authentication/authentication';
import { useAuthModalState } from 'src/state/general/general';
import { AuthModalWrappers } from 'components/AuthModal/AuthModal.styles';
import { FlLink } from 'components/Link/FlLink';

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
}

const initialValues: IRegisterForm = {
  username: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email(),
  username: Yup.string().required('Username is a required field'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password should be at least 8 characters'),
});

export const Register = () => {
  // TODO: improve submission error messages
  const [didSubmissionFail, setDidSubmissionFail] = useState(false);
  const { closeAuthModal, openLoginModal } = useAuthModalState();
  const { setAuthToken } = useAuthToken();

  const [registerMutation, { loading }] = useRegisterMutation();

  const register = (input: IRegisterForm) =>
    registerMutation({
      variables: {
        input,
      },
    })
      .then((response) => {
        const jwt = response.data?.register.jwt;

        if (!response || !jwt) {
          throw new Error(
            "Request failed somehow. Gotta investigate this further. If you're a user pleeeease share with us that this happened! (Share this specific messsage)",
          );
        }

        console.log('completed!', response);
        setAuthToken(jwt);
        closeAuthModal();
      })
      .catch((err) => {
        console.log('err', err);
        setDidSubmissionFail(true);
      });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={register}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <AuthModalWrappers.Content onSubmit={handleSubmit}>
          <AuthModalWrappers.Title>Register</AuthModalWrappers.Title>
          <AuthModalWrappers.Subtitle>
            Already have an account?&nbsp;
            <FlLink underline onClick={openLoginModal}>
              Sign in
            </FlLink>
          </AuthModalWrappers.Subtitle>
          <AuthModalWrappers.InputsWrapper>
            <InputControl name="email" label="Email" />
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
