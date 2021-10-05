import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'src/styles/themes/ThemeProvider';
import theme from 'src/theme/chakra-theme';
import './_app.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </ThemeProvider>
);

export default App;
