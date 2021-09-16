import React from 'react';
// import Navbar from "../Navbar/Navbar";
import { Box } from '@chakra-ui/react';
import Navbar from 'components/core/Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box bgColor="black">
    {/* <Navbar /> */}
    <Navbar />
    <main>{children}</main>
  </Box>
);

export default Layout;
