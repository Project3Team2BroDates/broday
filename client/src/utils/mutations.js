import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        password
      }
    }
  }
`;
export const ADD_BRO = gql`
mutation addBro($userId: ID!) {
  addBro(userId: $userId) {
    _id
    name
  }
}`
export const ADD_ACTIVITY = gql`
  mutation addActivity($activityText: String!) {
    addActivity(activityText: $activityText) {
      _id
      activityText
    }
  }
`;

export const POST_MESSAGE = gql`
mutation($user: String!, $content: String!) {
  postMessage(user: $user, content: $content) 
}
`;
