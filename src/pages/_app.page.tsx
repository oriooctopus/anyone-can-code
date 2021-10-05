import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'src/theme/chakra-theme';
import './_app.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
