/* eslint-disable @typescript-eslint/no-namespace */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { A, Object } from 'ts-toolbelt';
import {
  FlattenStrapiParam,
  NormalizeStrapi,
  Nullable,
  NullableTernary,
} from 'src/utils/general';

// export type RecursiveNormalizeSingular<O extends object> = {
//   [P in keyof O]: O[P] extends FlattenStrapiParam
//     ? RecursiveNormalize<NormalizeStrapi<O[P]>> &
//         Object.Omit<O[P], 'data' | 'attributes'>
//     : O[P];
// };

export type RecursiveNormalizeSingular<O extends object> = {
  [P in keyof O]: NullableTernary<
    O[P],
    FlattenStrapiParam,
    RecursiveNormalize<NormalizeStrapi<O[P]>>,
    O[P]
  >;
};

// export type RecursiveNormalizeSingular<O extends object> = {
//   [P in keyof O]: O[P] extends FlattenStrapiParam
//     ? RecursiveNormalize<NormalizeStrapi<O[P]>> &
//         Object.Omit<O[P], 'data' | 'attributes'>
//     : O[P] extends Nullable<FlattenStrapiParam>
//     ?
//         | (RecursiveNormalize<NormalizeStrapi<O[P]>> &
//             Object.Omit<NonNullable<O[P]>, 'data' | 'attributes'>)
//         | null
//     : O[P];
// };

export type RecursiveNormalize<O extends object> = O extends Array<infer inner>
  ? inner extends object
    ? RecursiveNormalizeSingular<inner>[]
    : inner extends Nullable<object>
    ? RecursiveNormalizeSingular<NonNullable<inner>>[] | null
    : never
  : RecursiveNormalizeSingular<O>;

type hm = RecursiveNormalize<simpleTest>['result'];

type simpleTest = {
  result: {
    data: [
      {
        attributes: {
          name: 'abc123';
          sublessons: {
            data: [
              {
                attributes: {
                  innerAttribute: 'abciowjfiweo';
                };
              },
            ];
          };
        };
      },
    ];
  } | null;
};

type deepData2Test = RecursiveNormalize<
  typeof deepData2
>['result'][number]['sublessons'][number]['description'];

const deepData2 = {
  result: {
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
                        __typename: 'MultipleChoiceChallengeEntityResponse',
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
  },
};

type yeah12 = RecursiveNormalize<
  typeof testDataThatWorks
>['result'][number]['name'];

type onDeepData = RecursiveNormalize<
  typeof deepData
>['result'][number]['sublessons'][number]['lesson']['name'];

const deepData = {
  result: {
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
                  description: 'a description' as const,
                  lesson: {
                    __typename: 'LessonEntityResponse',
                    data: {
                      __typename: 'LessonEntity',
                      id: '6',
                      attributes: {
                        __typename: 'Lesson',
                        name: 'Getting Started with Variables' as const,
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
                        __typename: 'MultipleChoiceChallengeEntityResponse',
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
  },
};

// if it's an array of objects (not of StrapiParam, because it can just have something like sublesson as the key) run RecursiveNormalize on every item within

// so the basic problem is that it can't deal with arrays
//

type base = NormalizeStrapi<typeof deepData['result']>;
type howItsFailingNow = RecursiveNormalize<base>;
// type butShouldntThisWork = RecursiveNormalize<howItsFailingNow>;
// this is what I need to get it to do
type works = RecursiveNormalize<base[number]>;
type same = RecursiveNormalizeSingular<base[number]>;

// because RecursiveNormalize doesn't work on an array
// but then why is there no type error?

type test = RecursiveNormalize<typeof deepData>['result'];
type test2 = test[number]['sublessons'];

type param = object | object[];

type addA<T extends param> = T extends Array<infer inner>
  ? Array<inner & { a: 123 }>
  : T & { a: 123 };

type yeah = addA<{ b: 456 }>;
type yeah2 = addA<[{ b: 456 }, { c: 789 }]>;

// starts as first
// it is normalized: first -> firstNormalizedOnce
// Flatten - subjectOfNextRecursiveNormalize -> normalizedSecondNormalization
// normalize normalizedSecondNormalization (ran on sublesson) -> nothing changes so the same thing is returned
//

// the problem is you need to run normalize and then RecurisveNormalize on all of its keys
// really you should flatten everything, and then after run normalize on all the kids of the flattened things
// NormalizeStrapi<O[P]>

// type test5 = RecursiveNormalize<typeof test>;
// type test6 = test5['result']['sublesson']['description'];
// type test10 = keyof test5['result'];

// const test = {
//   result: {
//     a: 123, // this for some reason is getting removed
//     data: {
//       attributes: {
//         name: 'myName',
//         sublesson: {
//           attributes: {
//             description: 'this is a description',
//           },
//         },
//       },
//     },
//   },
// };

// type test7 = RecursiveNormalize<{
//   d: 456;
// }>;

// type test8 = RecursiveNormalize<
//   NormalizeStrapi<{
//     attributes: {
//       d: 456;
//     };
//   }>
// >;

// type test9 = NormalizeStrapi<{
//   attributes: {
//     d: 456;
//   };
// }>;

// HOW TO DO THE RECURSIVE FUNCTION

// go through all keys
//   if one of the values is a strapiobject (the keys aren't touched or removed or anything because this is the outer layer )
//     RecursiveNormalize<NormalizeStrapi<O[K]>>

namespace AttributesOnly {
  type Base = NormalizeStrapi<{
    attributes: {
      a: 123;
    };
  }>;

  type BasicAccess = Base['a'];
  // @ts-expect-error expected
  type CantAccessAttributes = Base['attributes'];
  // @ts-expect-error expected
  type CantAccessRandomProperty = Base['b'];
}

namespace DataWithAttributes {
  type Base = NormalizeStrapi<{
    data: {
      attributes: {
        a: 123;
      };
    };
  }>;

  type BasicAccess = Base['a'];
  // @ts-expect-error expected
  type CantAccessRandomProperty = Base['b'];
  // @ts-expect-error expected
  type CantAccessAttributes = Base['attributes'];
  // @ts-expect-error expected
  type CantAccessData = Base['data'];
}

namespace NormalizeDeep {
  type Basic = NormalizeStrapi<typeof deepData>;
}

type test0 = Update<User, 'id' | 'info', A.x | null>;
// {
//     info: {
//         name: string;
//         age: number;
//         payment: {};
//     } | null;
//     id: number | null;
// }
