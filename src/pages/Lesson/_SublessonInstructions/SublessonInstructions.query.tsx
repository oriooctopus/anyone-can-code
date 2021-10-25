import gql from 'graphql-tag';
import {
  codeChallengeData,
  multipleChoiceChallengeData,
} from 'components/Challenges/Challenge.query';

export const sublessonInstructionsData = gql`
  fragment sublessonInstructionsData on Sublesson {
    descriptions {
      short
      medium
      long
    }
    name
    lesson {
      name
    }
    challenges {
      codeChallenge {
        ...codeChallengeData
      }
      multipleChoiceChallenge {
        ...multipleChoiceChallengeData
      }
    }
  }
  ${codeChallengeData}
  ${multipleChoiceChallengeData}
`;
