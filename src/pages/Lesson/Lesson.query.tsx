import gql from 'graphql-tag';
import { lessonSidebarData } from 'components/LessonSidebar/LessonSidebar.query';

// TODO: write a custom query on the backend that accepts a module as well and only returns one item
export const getLessonData = gql`
  query getLessonData($slug: String!) {
    lessons(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          sublessons {
            data {
              ...sublessonData
              ...lessonSidebarData
            }
          }
        }
      }
    }
  }
  ${lessonSidebarData}
`;
