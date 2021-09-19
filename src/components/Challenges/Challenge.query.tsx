import gql from 'graphql-tag';

export const codeChallengeData = gql`
  fragment codeChallengeData on CodeChallenge {
    tests {
      internalTest
      label
    }
    startingCode
    prompt
  }
`;

export const multipleChoiceChallengeData = gql`
  fragment multipleChoiceChallengeData on MultipleChoiceChallenge {
    prompt
    options {
      text
      isCorrect
    }
  }
`;
