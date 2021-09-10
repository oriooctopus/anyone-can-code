import gql from 'graphql-tag';
import { sublessonInstructionsData } from 'components/SublessonInstructions/SublessonInstructions.query';

export const getLessonData = gql`
  query getLessonData($slug: String!) {
    lessons(where: { slug: $slug }) {
      name
      sublessons {
        ...sublessonInstructionsData
      }
    }
  }
  ${sublessonInstructionsData}
`;
