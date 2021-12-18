import gql from 'graphql-tag';

export const SyntaxHandbookData = gql`
  query getSyntaxHandbookData($slug: String!) {
    courses(where: { slug: $slug }) {
      modules {
        ModuleLessons {
          lesson {
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
  }
`;
