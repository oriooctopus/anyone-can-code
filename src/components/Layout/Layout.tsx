import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box bgColor="black">
    <Navbar />
    <main>{children}</main>
  </Box>
);

export default Layout;
