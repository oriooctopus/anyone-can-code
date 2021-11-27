import gql from 'graphql-tag';

export const getOnClickNextData = gql`
  query getOnClickNextData($currentLessonId: Int!) {
    nextLessonSlug(currentLessonId: $currentLessonId)
  }
`;
