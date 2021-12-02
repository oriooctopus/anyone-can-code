import { useReactiveVar } from '@apollo/client';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import '@fontsource/roboto';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import LessonSidebar from 'src/components/LessonSidebar/LessonSidebar';
import {
  GetLessonDataQuery,
  useGetLessonDataQuery,
} from 'src/generated/graphql';
import { SublessonInstructions } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions';
import { getChallengesFromSublessonChallenges } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions.utils';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { resetLesson } from 'src/state/lesson/lesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { isCodeChallenge } from 'components/Challenges/Challenge.utils';
import { useCodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.utils';
import { Editor } from 'components/Editor/Editor';
import { layoutStyles } from 'components/Layout/Layout.styles';
import Navbar from 'components/Navbar/Navbar';

interface IRouteParams {
  slug: string;
}

// TODO: Fix once we upgrade strapi
export type LessonType = NonNullable<
  NonNullable<GetLessonDataQuery['lessons']>[number]
>;

interface IProps {
  lesson: LessonType;
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
    // @ts-expect-error
    window.setSublesson = currentSublessonIndexVar;
    // @ts-expect-error
    window.setChallenge = currentChallengeIndexVar;
  }, []);

  if (!currentSublesson) {
    return <span>no sublesson</span>;
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={{ md: '20px' }}>
      <GridItem colSpan={5}>
        <SublessonInstructions
          sublesson={currentSublesson}
          totalSublessons={totalSublessons}
          lastChallengeIndexOfPreviousSublesson={
            lastChallengeIndexOfPreviousSublesson
          }
        />
      </GridItem>
      <GridItem colSpan={7} mt="10px">
        <Editor challenge={currentChallenge} onMount={onMount} />
      </GridItem>
    </Grid>
  );
};

export const LessonPageContainer = () => {
  const { slug } = useParams<IRouteParams>();
  const { data, loading, error } = useGetLessonDataQuery({
    variables: {
      slug,
    },
  });

  const lesson = data?.lessons?.[0];
  const sublessons = lesson?.sublessons;

  useEffect(() => lesson && resetLesson(lesson), [lesson?.id]);

  return (
    <Flex {...layoutStyles} overflow="hidden">
      <Box pl="2px" mr={{ md: '20px', lg: '30px', xl: '40px' }}>
        <Navbar />
        {lesson && <LessonPage lesson={lesson} />}
      </Box>
      {sublessons && <LessonSidebar sublessons={sublessons} />}
    </Flex>
  );
};
