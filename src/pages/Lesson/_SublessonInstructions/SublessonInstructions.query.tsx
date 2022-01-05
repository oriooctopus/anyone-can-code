import gql from 'graphql-tag';
import {
  codeChallengeData,
  multipleChoiceChallengeData,
} from 'components/Challenges/Challenge.query';

export const sublessonInstructionsData = gql`
  fragment sublessonInstructionsData on SublessonEntity {
    id
    attributes {
      name
      description
      lesson {
        data {
          id
          attributes {
            name
          }
        }
      }
      challenges {
        id
        codeChallenge {
          data {
            ...codeChallengeData
          }
        }
        multipleChoiceChallenge {
          data {
            ...multipleChoiceChallengeData
          }
        }
      }
    }
  }
  ${codeChallengeData}
  ${multipleChoiceChallengeData}
`;
