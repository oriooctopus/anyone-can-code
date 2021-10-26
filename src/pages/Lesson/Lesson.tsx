import { useReactiveVar } from '@apollo/client';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import '@fontsource/roboto';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { currentChallengeIndexVar, currentSublessonIndexVar } from 'src/cache';
import LessonProgress from 'src/components/LessonProgress/LessonProgress';
import {
  GetLessonDataQuery,
  useGetLessonDataQuery,
} from 'src/generated/graphql';
import { SublessonInstructions } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions';
import { getChallengesFromSublessonChallenges } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { isCodeChallenge } from 'components/Challenges/Challenge.utils';
import { useCodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import { Editor } from 'components/Editor/Editor';
import Layout from 'components/Layout/Layout';
import { LessonBar } from 'components/LessonBar/LessonBar';

interface IRouteParams {
  slug: string;
}

type Lesson = NonNullable<NonNullable<GetLessonDataQuery['lessons']>[number]>;

interface IProps {
  lesson: Lesson;
}

const LessonPage = ({ lesson }: IProps) => {
  const sublessons = lesson.sublessons || [];
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);
  const currentSublesson = sublessons[currentSublessonIndex];
  const parsedChallenges = getChallengesFromSublessonChallenges(
    currentSublesson?.challenges,
  );
  const currentChallenge = parsedChallenges[currentChallengeIndex];
  // I thought about abstracting away this logic.. but I don't think it's really necessary with typescript?
  const { runTests } = useCodeChallengeTests(
    isCodeChallenge(currentChallenge) ? currentChallenge.tests : [],
  );
  const totalSublessons = sublessons.length;
  /*
   * This actually has to be fixed as it doesn't make sense when there aren't challenges
   * The idea is when going back from the beginning of a sublesson to the end of another,
   * find the last challenge of the last sublesson and that's where you'll go, but what we
   * should just do is have it be -1 or something
   */
  const lastChallengeIndexOfPreviousSublesson =
    currentSublessonIndex > 0
      ? (sublessons?.[currentSublessonIndex - 1]?.challenges?.length || 0) - 1
      : undefined;

  const onMount = () => {
    runTests();
  };

  useEffect(() => {
    // TODO: set types for these
    window.setSublesson = currentSublessonIndexVar;
    window.setChallenge = currentChallengeIndexVar;
  }, []);

  if (!currentSublesson) {
    return <span>no sublesson</span>;
  }

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
          <LessonProgress sublessons={sublessons} />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const LessonPageContainer = () => {
  const { slug } = useParams<IRouteParams>();
  const { data, loading, error } = useGetLessonDataQuery({
    variables: {
      slug,
    },
  });

  console.log('data', data, slug);

  const lesson = data?.lessons?.[0];

  if (!lesson) {
    return <span>Lesson not found</span>;
  }

  return <LessonPage lesson={lesson} />;
};
