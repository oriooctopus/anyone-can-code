import './_app.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { useState } from 'react';
import theme from 'src/theme/chakra-theme';
import {
  SidebarOverlayContext,
  TSidebarOverlayState,
} from 'components/SidebarOverlays/SidebarOverlayContext';

const App = ({ Component, pageProps }: AppProps) => {
  const [overlayState, setOverlayState] = useState<TSidebarOverlayState>(null);

  return (
    <ChakraProvider theme={theme}>
      <SidebarOverlayContext.Provider value={{ overlayState, setOverlayState }}>
        <Component {...pageProps} />
      </SidebarOverlayContext.Provider>
    </ChakraProvider>
  );
};

export default App;
