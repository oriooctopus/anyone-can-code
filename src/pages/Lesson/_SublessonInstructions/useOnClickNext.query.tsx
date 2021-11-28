import gql from 'graphql-tag';

export const getSublessonNavigationData = gql`
  query getSublessonNavigationData($currentLessonId: Int!) {
    nextLessonSlug(currentLessonId: $currentLessonId)
  }
`;
