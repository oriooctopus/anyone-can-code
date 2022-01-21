import { useReactiveVar } from '@apollo/client';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import '@fontsource/roboto';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { LessonSidebar } from 'src/components/LessonSidebar/LessonSidebar';
import {
  GetLessonDataQuery,
  useGetLessonDataQuery,
} from 'src/generated/graphql';
import { SublessonInstructions } from 'src/pages/Lesson/_SublessonInstructions/SublessonInstructions';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { resetLesson } from 'src/state/lesson/lesson';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { NormalizeStrapi, normalizeStrapiData } from 'src/utils/general';
import { RecursiveNormalize } from 'src/utils/normalizationTests';
import { Editor } from 'components/Editor/Editor';
import { layoutStyles } from 'components/Layout/Layout.styles';
import { Navbar } from 'components/Navbar/Navbar';

export interface ILessonRouteParams {
  slug: string;
}

// export type LessonTypeOld = NormalizeStrapi<
//   NonNullable<GetLessonDataQuery['lessons']>
// >[number];
export type LessonType = NonNullable<
  RecursiveNormalize<GetLessonDataQuery>['lessons']
>[number];

interface IProps {
  lesson: LessonType | undefined;
}

const LessonPage = ({ lesson }: IProps) => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);

  if (!lesson) {
    return null;
  }

  const sublessons = lesson?.sublessons
    ? normalizeStrapiData(lesson?.sublessons)
    : [];
  const currentSublesson = sublessons[currentSublessonIndex];
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

  useEffect(() => {
    // TODO: set types for these
    // @ts-expect-error will fix later
    window.setSublesson = currentSublessonIndexVar;
    // @ts-expect-error will fix later
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
        <Editor />
      </GridItem>
    </Grid>
  );
};

export const LessonPageContainer = () => {
  const [lesson, setLesson] = useState<LessonType>();
  const { slug } = useParams<ILessonRouteParams>();
  useGetLessonDataQuery({
    variables: {
      slug,
    },
    onCompleted: (result) => {
      if (!result?.lessons) {
        throw new Error('No lessons found');
      }
      console.log('lesson', result?.lessons);

      // This query should be changed to just return one, which I think is now possible anyways with v4
      const [lessonData] = normalizeStrapiData(result?.lessons);
      /**
       * It's important that the lesson completion data is reset
       * before the lesson value is provided. This is to avoid race
       * conditions.
       */
      lessonData && resetLesson(lessonData);
      setLesson(lessonData);
    },
  });

  const sublessons = lesson?.sublessons
    ? normalizeStrapiData(lesson.sublessons)
    : [];

  return (
    <Flex {...layoutStyles} overflow="hidden">
      <Box pl="2px" mr={{ md: '20px', lg: '30px', xl: '40px' }}>
        <Navbar />
        {lesson && <LessonPage lesson={lesson} />}
      </Box>
      {sublessons.length && <LessonSidebar sublessons={sublessons} />}
    </Flex>
  );
};
