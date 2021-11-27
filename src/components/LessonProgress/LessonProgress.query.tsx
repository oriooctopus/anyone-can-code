import gql from 'graphql-tag';

export const lessonProgressData = gql`
  fragment lessonProgressData on Sublesson {
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
