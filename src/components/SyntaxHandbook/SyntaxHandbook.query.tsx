import gql from 'graphql-tag';

export const SyntaxHandbookData = gql`
  query getSyntaxHandbookData($slug: String!) {
    courses(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          modules {
            data {
              attributes {
                moduleLessons {
                  lesson {
                    data {
                      attributes {
                        syntaxEntry {
                          data {
                            attributes {
                              content
                              name
                              maxWidth
                            }
                          }
                        }
                        sublessons {
                          data {
                            attributes {
                              syntaxEntry {
                                data {
                                  attributes {
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
