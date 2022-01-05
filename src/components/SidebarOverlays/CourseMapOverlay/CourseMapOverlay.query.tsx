import gql from 'graphql-tag';

export const CourseMapOverlayData = gql`
  query getCourseMapOverlayData($slug: String!) {
    courses(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          modules {
            data {
              attributes {
                name
                moduleLessons {
                  lesson {
                    data {
                      attributes {
                        name
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
