import React from 'react';
import { GetServerSideProps } from 'next';
import Editor from 'src/components/Editor/Editor';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import Layout from 'src/components/Layout/Layout';
import LessonProgress from 'src/components/LessonProgress/LessonProgress';
import theme from 'src/theme/chakra-theme';
// import SublessonInstructions from 'components/SublessonInstructions/SublessonInstructions';
import SublessonInstructionsContainer from 'components/SublessonInstructions/SublessonInstructionsContainer';
import '@fontsource/roboto';
import { PageGetLessonDataComp, ssrGetLessonData } from 'src/generated/page';
import { withApollo } from 'src/utilsreal/withApollo';

const App: PageGetLessonDataComp = (props) => {
  console.log('the props passed to page', props);
  return <span>13456</span>;
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
};

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
}) => {
  console.log('yo this happens right', resolvedUrl);
  return await ssrGetLessonData.getServerPage({
    variables: {
      slug: 'getting-started-with-variables',
    },
  });
};

export default withApollo(
  ssrGetLessonData.withPage((arg) => ({
    variables: { slug: 'getting-started-with-variables' },
    // variables: { code: arg?.query?.continent?.toString().toUpperCase() || '' },
  }))(App),
);
