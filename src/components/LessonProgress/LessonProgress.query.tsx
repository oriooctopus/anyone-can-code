import gql from 'graphql-tag';

export const lessonProgressData = gql`
  fragment lessonProgressData on Sublesson {
    name
    challenges {
      __typename # this is just because I need at least one field
    }
  }
`;
