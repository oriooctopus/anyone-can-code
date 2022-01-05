import gql from 'graphql-tag';

export const getLessonExternalResourcesData = gql`
  query getLessonExternalResourcesData($slug: String!) {
    lessons(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          externalResources {
            name
            link
            type
          }
        }
      }
    }
  }
`;
