import { CodeChallengeDataFragment } from 'src/generated/graphql';

const data = {
  __typename: 'Sublesson' as const,
  name: 'Camel Casing',
  description:
    'In Javascript, the standard way to write our variables is called camel casing. Camel casing means having no spaces between words, and capitalizing every word besides the first word. Here are some examples. On the left side is how we might write it in English, and on the right is how it will look when camel-cased:\n\n- my full name -> myFullName\n- total lessons -> totalLessons\n- a very long sentence about camel-casing -> aVeryLongSentenceAboutCamelCasing',
  lesson: {
    __typename: 'Lesson',
    name: 'Getting Started with Variables',
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
                __typename: 'ComponentChallengeMultipleChoiceOptions',
                text: 'MyCoolHouse',
                isCorrect: false,
                incorrectChoiceExplanation:
                  'This casing is known as PascalCase',
              },
              {
                __typename: 'ComponentChallengeMultipleChoiceOptions',
                text: 'nextLesson',
                isCorrect: true,
                incorrectChoiceExplanation: null,
              },
              {
                __typename: 'ComponentChallengeMultipleChoiceOptions',
                text: 'my_city',
                isCorrect: false,
                incorrectChoiceExplanation:
                  'This casing is known as snake_case',
              },
              {
                __typename: 'ComponentChallengeMultipleChoiceOptions',
                text: 'TOTAL_REFRIGERATORS',
                isCorrect: false,
                incorrectChoiceExplanation:
                  'THIS CASING IS KNOWN AS UPPER_CASE_SNAKE_CASE',
              },
              {
                __typename: 'ComponentChallengeMultipleChoiceOptions',
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
};
