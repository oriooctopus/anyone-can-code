import gql from 'graphql-tag';
import { lessonSidebarData } from 'components/LessonSidebar/LessonSidebar.query';

// TODO: write a custom query on the backend that accepts a module as well and only returns one item
export const getLessonData = gql`
  query getLessonData($slug: String!) {
    lessons(where: { slug: $slug }) {
      id
      name
      sublessons {
        ...sublessonInstructionsData
        ...lessonSidebarData
      }
    }
  }
  ${lessonSidebarData}
`;
