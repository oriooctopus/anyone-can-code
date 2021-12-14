import gql from 'graphql-tag';

export const login = gql`
  mutation register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`;
