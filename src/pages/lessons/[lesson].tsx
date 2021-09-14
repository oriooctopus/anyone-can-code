import React from 'react';
import { GetServerSideProps } from 'next';
import Editor from 'src/components/Editor/Editor';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import Layout from 'src/components/Layout/Layout';
import LessonProgress from 'src/components/LessonProgress/LessonProgress';
import SublessonInstructions from 'components/SublessonInstructions/SublessonInstructions';
// import SublessonInstructionsContainer from 'components/SublessonInstructions/SublessonInstructionsContainer';
import '@fontsource/roboto';
import { PageGetLessonDataComp, ssrGetLessonData } from 'src/generated/page';
import { withApollo } from 'src/utilsreal/withApollo';

const App: PageGetLessonDataComp = (props) => {
  const {
    data: { lessons },
  } = props;
  console.log('the props passed to page', props);

  const test = lessons[0].sublessons[0];

  if (!test) {
    return <span>no lesson</span>;
  }

  return (
    <Layout>
      <Grid templateColumns="repeat(12, 1fr)" gap="20px">
        <GridItem colSpan={{ md: 6, lg: 4 }}>
          <SublessonInstructions {...test} />
        </GridItem>
        <GridItem colSpan={6} mt="20px">
          <Editor />
        </GridItem>
        <GridItem colSpan={2} display={{ md: 'none', lg: 'block' }}>
          <LessonProgress />
        </GridItem>
      </Grid>
    </Layout>
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
  ssrGetLessonData.withPage(({ query }) => ({
    variables: { slug: query.lesson as string },
  }))(App),
  // ssrGetLessonData.withPage(({ query }) => {
  //   console.log('query', query);
  //   return {
  //     variables: { slug: query.lesson as String },
  //   };
  // })(App),
);
