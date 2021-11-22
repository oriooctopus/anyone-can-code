import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { layoutStyles } from 'components/Layout/Layout.styles';
import Navbar from 'components/Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

// This file needs to be more thought through.

export const Layout = ({ children }: LayoutProps) => (
  <Box {...layoutStyles}>
    <Navbar />
    <Box as="main" flex="1">
      {children}
    </Box>
  </Box>
);

type LessonLayoutProps = {
  children: React.ReactNode;
  lessonSidebar: React.ReactNode;
};

export const LessonLayout = ({
  children,
  lessonSidebar,
}: LessonLayoutProps) => (
  <Box {...layoutStyles}>
    <Grid
      templateColumns="11fr 1fr"
      gap={{ md: '20px', lg: '30px', xl: '40px' }}
      h="100%"
    >
      <Box pl="2px">
        <Navbar />
        {children}
      </Box>
      {lessonSidebar}
    </Grid>
  </Box>
);
