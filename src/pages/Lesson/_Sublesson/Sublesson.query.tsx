import gql from 'graphql-tag';
import {
  codeChallengeData,
  multipleChoiceChallengeData,
  playgroundData,
} from 'components/Step/Step.query';

export const sublessonData = gql`
  fragment sublessonData on SublessonEntity {
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
      steps {
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
        playground {
          data {
            ...playgroundData
          }
        }
      }
    }
  }
  ${codeChallengeData}
  ${multipleChoiceChallengeData}
  ${playgroundData}
`;
