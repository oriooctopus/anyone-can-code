import { GetServerSideProps } from 'next';
import { Editor } from 'components/Editor/Editor';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import LessonProgress from 'src/components/LessonProgress/LessonProgress';
import SublessonInstructions from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions';
import { PageGetLessonDataComp, ssrGetLessonData } from 'src/generated/page';
import theme from 'src/theme/chakra-theme';
import { withApollo } from 'src/utilsreal/withApollo';
import Layout from 'components/Layout/Layout';
import { getChallengesFromSublessonChallenges } from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.utils';
import '@fontsource/roboto';
import { useCodeChallengeTests } from 'components/Challenges/Challenge.utils';

const App: PageGetLessonDataComp = (props) => {
  const {
    data: { lessons },
  } = props;

  const currentSublessonIndex = 0; // comes from state
  const currentChallengeIndex = 0; // comes from state

  const currentSublesson = lessons[0].sublessons[currentSublessonIndex];
  const parsedChallenges = getChallengesFromSublessonChallenges(
    currentSublesson.challenges,
  );
  const currentChallenge = parsedChallenges[currentChallengeIndex];

  // I thought about abstracting away this logic.. but I don't think it's really necessary with typescript?
  const isCodeChallenge = currentChallenge.__typename === 'CodeChallenge';
  const isMultipleChoiceChallenge =
    currentChallenge.__typename === 'MultipleChoiceChallenge';
  const { runTests } = useCodeChallengeTests(
    isCodeChallenge ? currentChallenge.tests : [],
  );

  const onMount = () => {
    runTests();
  };

  if (!currentChallenge) {
    return <span>no lesson</span>;
  }

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Grid templateColumns="repeat(12, 1fr)" gap="20px" h="100%">
          <GridItem colSpan={{ lg: 6, md: 7 }}>
            <SublessonInstructions {...currentSublesson} />
          </GridItem>
          <GridItem colSpan={{ md: 5, lg: 4 }} mt="20px">
            {isCodeChallenge && (
              <Editor challenge={currentChallenge} onMount={onMount} />
            )}
          </GridItem>
          <GridItem colSpan={2} display={{ md: 'none', lg: 'block' }}>
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
