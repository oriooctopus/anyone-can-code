import gql from 'graphql-tag';
import { sublessonInstructionsData } from 'src/pages/lessons/_SublessonInstructions/SublessonInstructions.query';

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
