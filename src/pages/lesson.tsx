import React from 'react';
import Editor from '../components/Editor/Editor';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
import LessonProgress from '../components/LessonProgress/LessonProgress';
import theme from '../theme/chakra-theme';
// import SublessonInstructions from 'components/SublessonInstructions/SublessonInstructions';
import SublessonInstructionsContainer from 'components/SublessonInstructions/SublessonInstructionsContainer';
import '@fontsource/roboto';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Grid templateColumns="repeat(12, 1fr)" gap="20px">
          <GridItem colSpan={4}>
            <SublessonInstructionsContainer />
          </GridItem>
          <GridItem colSpan={6} mt="20px">
            <Editor />
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
