import gql from 'graphql-tag';

export const codeChallengeData = gql`
  fragment codeChallengeData on CodeChallenge {
    id
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
    id
    prompt
    options {
      text
      isCorrect
      incorrectChoiceExplanation
    }
    canSelectMultipleOptions
    useMarkdownForOptionsText
  }
`;
