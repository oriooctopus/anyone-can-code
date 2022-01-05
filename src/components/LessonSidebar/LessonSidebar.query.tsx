import gql from 'graphql-tag';

export const lessonSidebarData = gql`
  fragment lessonSidebarData on SublessonEntity {
    attributes {
      name
      challenges {
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
      }
    }
  }
`;
