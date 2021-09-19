import React from 'react';
// import Navbar from "../Navbar/Navbar";
import { Box } from '@chakra-ui/react';
import Navbar from 'components/Navbar/Navbar';
import { StyledLayoutMain } from 'components/Layout/Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box bgColor="black" h="100vh" d="flex" flexDirection="column">
    {/* <Navbar /> */}
    <Navbar />
    <StyledLayoutMain>{children}</StyledLayoutMain>
  </Box>
);

export default Layout;
