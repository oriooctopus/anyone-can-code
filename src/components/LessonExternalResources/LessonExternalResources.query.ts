import gql from 'graphql-tag';

export const getLessonExternalResourcesData = gql`
  query getLessonExternalResourcesData($slug: String!) {
    lessons(where: { slug: $slug }) {
      externalResources {
        name
        link
        type
      }
    }
  }
`;
