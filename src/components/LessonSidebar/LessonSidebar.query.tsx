import gql from 'graphql-tag';

export const lessonSidebarData = gql`
  fragment lessonSidebarData on Sublesson {
    name
    challenges {
      codeChallenge {
        ...codeChallengeData
      }
      multipleChoiceChallenge {
        ...multipleChoiceChallengeData
      }
    }
  }
`;
