import gql from 'graphql-tag';

export const SyntaxHandbookData = gql`
  query getSyntaxHandbookData($slug: String!) {
    courses(where: { slug: $slug }) {
      modules {
        lessons {
          syntaxEntry {
            content
            name
            maxWidth
          }
          sublessons {
            syntaxEntry {
              content
              name
              maxWidth
            }
          }
        }
      }
    }
  }
`;
