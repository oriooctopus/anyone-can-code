import './_app.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from 'src/theme/chakra-theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
