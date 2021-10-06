import gql from 'graphql-tag';
import { sublessonInstructionsData } from 'components/ContentPanel/ContentPanel.query';
import { lessonProgressData } from 'components/LessonProgress/LessonProgress.query';

export const getLessonData = gql`
  query getLessonData($slug: String!) {
    lessons(where: { slug: $slug }) {
      name
      sublessons {
        ...sublessonInstructionsData
        ...lessonProgressData
      }
    }
  }
  ${sublessonInstructionsData}
  ${lessonProgressData}
`;
