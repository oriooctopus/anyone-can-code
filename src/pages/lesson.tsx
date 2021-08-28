import React from 'react';
import EditorContainer from '../containers/EditorContainer';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import LessonInstructionsContainer from '../containers/LessonInstructionsContainer';
import LessonProgress from '../components/LessonProgress/LessonProgress';
import theme from '../theme/chakra-theme';

function App() {
  console.log('theme', theme);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Grid templateColumns="repeat(12, 1fr)" gap="20px">
          <GridItem colSpan={4}>
            <LessonInstructionsContainer />
          </GridItem>
          <GridItem colSpan={6} mt="20px">
            <EditorContainer />
          </GridItem>
          <GridItem colSpan={2}>
            <LessonProgress />
          </GridItem>
        </Grid>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
