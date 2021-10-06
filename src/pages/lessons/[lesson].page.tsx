import { useReactiveVar } from '@apollo/client';
import { Grid, GridItem } from '@chakra-ui/react';
import '@fontsource/roboto';
import { GetStaticProps } from 'next';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import LessonProgress from 'src/components/LessonProgress/LessonProgress';
import { PageGetLessonDataComp, ssrGetLessonData } from 'src/generated/page';
import { SublessonInstructions } from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions';
import { getChallengesFromSublessonChallenges } from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.utils';
import { withApollo } from 'src/utils/withApollo';
import { useCodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import { Editor } from 'components/Editor/Editor';
import Layout from 'components/Layout/Layout';

const App: PageGetLessonDataComp = (props) => {
  const {
    data: { lessons },
  } = props;

  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);

  const currentSublesson = lessons[0].sublessons[currentSublessonIndex];
  const parsedChallenges = getChallengesFromSublessonChallenges(
    currentSublesson.sublessonChallenges,
  );
  const currentChallenge = parsedChallenges[currentChallengeIndex];

  // I thought about abstracting away this logic.. but I don't think it's really necessary with typescript?
  const isCodeChallenge = currentChallenge?.__typename === 'CodeChallenge';
  const { runTests } = useCodeChallengeTests(
    isCodeChallenge ? currentChallenge.tests : [],
  );
  const totalSublessons = lessons[0].sublessons.length;
  const lastChallengeIndexOfPreviousSublesson =
    currentSublessonIndex > 0
      ? lessons[0].sublessons[currentSublessonIndex - 1]?.sublessonChallenges
          ?.length - 1
      : undefined;

  const onMount = () => {
    console.log('mount is happening');
    runTests();
  };

  if (!currentSublesson) {
    return <span>no lesson</span>;
  }

  console.log('is lesson page rerunning');

  return (
    <Layout>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={{ md: '20px', lg: '30px', xl: '40px' }}
        h="100%"
      >
        <GridItem
          colSpan={{
            lg: true ? 5 : 7,
            md: true ? 7 : 9,
          }}
          {...props}
        >
          <SublessonInstructions
            sublesson={currentSublesson}
            totalSublessons={totalSublessons}
            lastChallengeIndexOfPreviousSublesson={
              lastChallengeIndexOfPreviousSublesson
            }
          />
        </GridItem>
        <GridItem colSpan={true ? 5 : 3} mt="20px">
          <Editor challenge={currentChallenge} onMount={onMount} />
        </GridItem>
        <GridItem colSpan={2} display={{ md: 'none', lg: 'block' }}>
          <LessonProgress sublessons={lessons[0].sublessons} />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const getStaticPaths = () => {
  return {
    paths: ['/lessons/getting-started-with-variables', '/lessons/strings'],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return await ssrGetLessonData.getServerPage({
    variables: {
      slug: params.lesson,
    },
  });
};

export default withApollo(
  ssrGetLessonData.withPage(({ query }) => ({
    variables: { slug: query.lesson as string },
  }))(App),
);
