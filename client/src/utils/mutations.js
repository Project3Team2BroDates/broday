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
mutation addBro($name: String!) {
  addBro(name: $name) {
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

export const ADD_EXISTING_ACTIVITY = gql`
  mutation addExistingActivity($activityText: String!) {
    addExistingActivity(activityText: $activityText) {
      _id
      activityText
    }
  }
`;

export const REMOVE_ACTIVITY = gql`
  mutation removeActivity($activityText: String!){
    removeActivity(activityText: $activityText){
      _id
      name
      activities {
      _id
      activityText
      }
    }
  }
`;

export const POST_MESSAGE = gql`
mutation($user: String!, $content: String!) {
  postMessage(user: $user, content: $content) 
}
`;