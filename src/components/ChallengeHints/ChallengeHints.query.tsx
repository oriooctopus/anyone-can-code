import gql from 'graphql-tag';

export const challengeHintsData = gql`
  fragment challengeHint on ComponentChallengeChallengeHints {
    text
    recommendedTimeBeforeViewing
  }
`;
