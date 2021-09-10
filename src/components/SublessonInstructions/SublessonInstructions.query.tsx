import gql from 'graphql-tag';

export const sublessonInstructionsData = gql`
  fragment sublessonInstructionsData on Sublesson {
    description
    name
    lesson {
      name
    }
    ...challenges
  }
`;
