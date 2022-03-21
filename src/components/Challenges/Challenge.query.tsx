import gql from 'graphql-tag';
import { challengeHintsData } from 'components/ChallengeHints/ChallengeHints.query';

export const codeChallengeData = gql`
  fragment codeChallengeData on CodeChallengeEntity {
    id
    attributes {
      tests {
        internalTest
        label
      }
      hints {
        ...challengeHint
      }
      getStartingCodeFromPreviousChallenge
      startingCode
      prompt
    }
  }
  ${challengeHintsData}
`;

export const multipleChoiceChallengeData = gql`
  fragment multipleChoiceChallengeData on MultipleChoiceChallengeEntity {
    id
    attributes {
      prompt
      options {
        text
        isCorrect
        incorrectChoiceExplanation
      }
      canSelectMultipleOptions
      optionsInitiallyHidden
    }
  }
`;
