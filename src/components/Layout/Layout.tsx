import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from 'components/Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box bgColor="black" h="100vh" d="flex" flexDirection="column">
    <Navbar />
    <Box as="main" flex="1">
      {children}
    </Box>
  </Box>
);

export default Layout;
