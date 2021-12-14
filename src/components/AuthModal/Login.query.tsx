import gql from 'graphql-tag';

export const login = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;
