import gql from 'graphql-tag';
import { challengeHintsData } from 'components/ChallengeHints/ChallengeHints.query';

export const codeChallengeData = gql`
  fragment codeChallengeData on CodeChallenge {
    id
    tests {
      internalTest
      label
    }
    hints {
      ...challengeHint
    }
    getStartingCodeFromPreviousChallenge
    challengeMeta {
      difficulty
    }
    startingCode
    prompt
  }
  ${challengeHintsData}
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
