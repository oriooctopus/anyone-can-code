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
import {
  recursiveNormalize,
  RecursiveNormalize,
} from 'src/utils/normalizeStrapi';
import { Editor } from 'components/Editor/Editor';
import { layoutStyles } from 'components/Layout/Layout.styles';
import { Navbar } from 'components/Navbar/Navbar';

export interface ILessonRouteParams {
  slug: string;
}

export type LessonType = NonNullable<
  RecursiveNormalize<GetLessonDataQuery>['lessons']
>[number];

interface IProps {
  lesson: LessonType | undefined;
}

const LessonPage = ({ lesson }: IProps) => {
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  useEffect(() => {
    // TODO: set types for these
    // @ts-expect-error will fix later
    window.setSublesson = currentSublessonIndexVar;
    // @ts-expect-error will fix later
    window.setChallenge = currentChallengeIndexVar;
  }, []);

  const sublessons = lesson?.sublessons || [];
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
      console.log('another test', recursiveNormalize(result.lessons));
      console.log('recursive ', recursiveNormalize(result));
      console.log(
        'this is what it would be',
        recursiveNormalize({
          __typename: 'LessonEntityResponseCollection',
          data: [
            {
              __typename: 'LessonEntity',
              id: '6',
              attributes: {
                __typename: 'Lesson',
                name: 'Getting Started with Variables',
                sublessons: {
                  __typename: 'SublessonRelationResponseCollection',
                  data: [
                    {
                      __typename: 'SublessonEntity',
                      id: '5',
                      attributes: {
                        __typename: 'Sublesson',
                        name: 'Camel Casing',
                        description:
                          'In Javascript, the standard way to write our variables is called camel casing. Camel casing means having no spaces between words, and capitalizing every word besides the first word. Here are some examples. On the left side is how we might write it in English, and on the right is how it will look when camel-cased:\n\n- my full name -> myFullName\n- total lessons -> totalLessons\n- a very long sentence about camel-casing -> aVeryLongSentenceAboutCamelCasing',
                        lesson: {
                          __typename: 'LessonEntityResponse',
                          data: {
                            __typename: 'LessonEntity',
                            id: '6',
                            attributes: {
                              __typename: 'Lesson',
                              name: 'Getting Started with Variables',
                            },
                          },
                        },
                        challenges: [
                          {
                            __typename: 'ComponentContentChallenges',
                            id: '10',
                            codeChallenge: {
                              __typename: 'CodeChallengeEntityResponse',
                              data: null,
                            },
                            multipleChoiceChallenge: {
                              __typename:
                                'MultipleChoiceChallengeEntityResponse',
                              data: {
                                __typename: 'MultipleChoiceChallengeEntity',
                                id: '10',
                                attributes: {
                                  __typename: 'MultipleChoiceChallenge',
                                  prompt:
                                    'Which of the following variable names is camel cased? Select all that apply',
                                  options: [
                                    {
                                      __typename:
                                        'ComponentChallengeMultipleChoiceOptions',
                                      text: 'MyCoolHouse',
                                      isCorrect: false,
                                      incorrectChoiceExplanation:
                                        'This casing is known as PascalCase',
                                    },
                                    {
                                      __typename:
                                        'ComponentChallengeMultipleChoiceOptions',
                                      text: 'nextLesson',
                                      isCorrect: true,
                                      incorrectChoiceExplanation: null,
                                    },
                                    {
                                      __typename:
                                        'ComponentChallengeMultipleChoiceOptions',
                                      text: 'my_city',
                                      isCorrect: false,
                                      incorrectChoiceExplanation:
                                        'This casing is known as snake_case',
                                    },
                                    {
                                      __typename:
                                        'ComponentChallengeMultipleChoiceOptions',
                                      text: 'TOTAL_REFRIGERATORS',
                                      isCorrect: false,
                                      incorrectChoiceExplanation:
                                        'THIS CASING IS KNOWN AS UPPER_CASE_SNAKE_CASE',
                                    },
                                    {
                                      __typename:
                                        'ComponentChallengeMultipleChoiceOptions',
                                      text: 'favorite-animal',
                                      isCorrect: false,
                                      incorrectChoiceExplanation:
                                        'This casing is known as kebab-case',
                                    },
                                  ],
                                  canSelectMultipleOptions: true,
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          ],
        }),
      );

      // This query should be changed to just return one, which I think is now possible anyways with v4
      const [lessonData] = recursiveNormalize(result)?.lessons || [];

      /**
       * It's important that the lesson completion data is reset
       * before the lesson value is provided. This is to avoid race
       * conditions.
       */
      lessonData && resetLesson(lessonData);
      setLesson(lessonData);
    },
  });

  return (
    <Flex {...layoutStyles} overflow="hidden">
      <Box pl="2px" mr={{ md: '20px', lg: '30px', xl: '40px' }}>
        <Navbar />
        <LessonPage lesson={lesson} />
      </Box>
      {lesson?.sublessons?.length && (
        <LessonSidebar sublessons={lesson?.sublessons} />
      )}
    </Flex>
  );
};
