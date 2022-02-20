import gql from 'graphql-tag';
import {
  codeChallengeData,
  multipleChoiceChallengeData,
  playgroundData,
} from 'components/Step/Step.query';

/**
 * TODO: make steps one fragment so that it can be shared
 * between this file and Sublesson.query.tsx
 */
export const lessonSidebarData = gql`
  fragment lessonSidebarData on SublessonEntity {
    attributes {
      name
      steps {
        codeChallenge {
          data {
            ...codeChallengeData
          }
        }
        multipleChoiceChallenge {
          data {
            ...multipleChoiceChallengeData
          }
        }
        playground {
          data {
            ...playgroundData
          }
        }
      }
    }
  }
  ${codeChallengeData}
  ${multipleChoiceChallengeData}
  ${playgroundData}
`;
