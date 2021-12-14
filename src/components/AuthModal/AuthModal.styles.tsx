import {
  ButtonProps,
  FormControl,
  Heading,
  HStack,
  ModalContent,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SubmitButton } from 'formik-chakra-ui';

interface IContentProps {
  children: React.ReactNode;
  onSubmit: any;
}

const Content = ({ children, onSubmit }: IContentProps) => (
  <ModalContent
    as="form"
    paddingY="64px"
    paddingX="48px"
    textAlign="center"
    onSubmit={onSubmit}
  >
    {children}
  </ModalContent>
);

const Title: React.FC = ({ children }) => (
  <Heading size="lg">{children}</Heading>
);

const Subtitle: React.FC = ({ children }) => (
  <Text size="md" marginTop="10px">
    {children}
  </Text>
);

const InputsWrapper: React.FC = ({ children }) => (
  <VStack
    marginTop="20px"
    spacing="16px"
    marginBottom="64px"
    textAlign="left"
    alignItems="stretch"
  >
    {children}
  </VStack>
);

interface IModalSubmitButtonProps
  extends Pick<ButtonProps, 'children' | 'isLoading'> {}

const ModalSubmitButton = (buttonProps: IModalSubmitButtonProps) => (
  <SubmitButton
    variant="solid"
    colorScheme="green"
    loadingText="Loading"
    {...buttonProps}
  />
);

const ErrorMessage: React.FC = ({ children }) => (
  <Text color="red.500" marginTop="6px" textAlign="left">
    {children}
  </Text>
);

export const AuthModalWrappers = {
  SubmitButton: ModalSubmitButton,
  Content,
  ErrorMessage,
  InputsWrapper,
  Subtitle,
  Title,
};
