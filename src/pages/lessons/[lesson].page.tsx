import { useReactiveVar } from '@apollo/client';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import '@fontsource/roboto';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import LessonProgress from 'src/components/LessonProgress/LessonProgress';
import {
  PageGetLessonDataComp,
  ssrGetLessonData,
  ssrGetAllLessonSlugs,
} from 'src/generated/page';
import { SublessonInstructions } from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions';
import { getChallengesFromSublessonChallenges } from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.utils';
import { withApollo } from 'src/utils/withApollo';
import { useCodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import { Editor } from 'components/Editor/Editor';
import Layout from 'components/Layout/Layout';
import { LessonBar } from 'components/LessonBar/LessonBar';

const App: PageGetLessonDataComp = (props) => {
  const {
    data: {
      lessons: [lesson],
    },
  } = props;

  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);

  const currentSublesson = lesson.sublessons[currentSublessonIndex];
  const parsedChallenges = getChallengesFromSublessonChallenges(
    currentSublesson.challenges,
  );
  const currentChallenge = parsedChallenges[currentChallengeIndex];

  // I thought about abstracting away this logic.. but I don't think it's really necessary with typescript?
  const isCodeChallenge = currentChallenge?.__typename === 'CodeChallenge';
  const { runTests } = useCodeChallengeTests(
    isCodeChallenge ? currentChallenge.tests : [],
  );
  const totalSublessons = lesson.sublessons.length;
  const lastChallengeIndexOfPreviousSublesson =
    currentSublessonIndex > 0
      ? lesson.sublessons[currentSublessonIndex - 1]?.challenges?.length - 1
      : undefined;

  const onMount = () => {
    runTests();
  };

  if (!currentSublesson) {
    return <span>no lesson</span>;
  }

  useEffect(() => {
    window.setSublesson = currentSublessonIndexVar;
    window.setChallenge = currentChallengeIndexVar;
  }, []);

  return (
    <Layout>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={{ md: '20px', lg: '30px', xl: '40px' }}
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
          <LessonProgress sublessons={lesson.sublessons} />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const {
    props: {
      data: { lessons },
    },
  } = await ssrGetAllLessonSlugs.getServerPage({});
  const lessonUrls = lessons.map(({ slug }) => `/lessons/${slug}`);

  return {
    paths: lessonUrls,
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
