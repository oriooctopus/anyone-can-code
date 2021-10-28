import gql from 'graphql-tag';
// import { sublessonInstructionsData } from 'components/ContentPanel/ContentPanel.query';
import { lessonProgressData } from 'components/LessonProgress/LessonProgress.query';

// TODO: write a custom query on the backend that accepts a module as well and only returns one item
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
  # ${sublessonInstructionsData}
  ${lessonProgressData}
`;

export const getAllLessonSlugs = gql`
  query getAllLessonSlugs {
    lessons {
      slug
    }
  }
`;
