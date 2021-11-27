import gql from 'graphql-tag';
import {
  codeChallengeData,
  multipleChoiceChallengeData,
} from 'components/Challenges/Challenge.query';

export const sublessonInstructionsData = gql`
  fragment sublessonInstructionsData on Sublesson {
    name
    id
    descriptions {
      short
      medium
      long
    }
    lesson {
      id
      name
    }
    challenges {
      id
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
