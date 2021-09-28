import gql from 'graphql-tag';

export const lessonProgressData = gql`
  fragment lessonProgressData on Sublesson {
    name
    sublessonChallenges {
      challenge {
        __typename # this is just because I need at least one field
      }
    }
  }
`;
