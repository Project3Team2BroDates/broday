import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      profilePic
      activities {
        _id
        activityText
        activityPic
      }
      bros {
        _id
        name
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      name
      email
      profilePic
      activities {
        _id
        activityText
        activityPic
      }
      bros {
        _id
        name
      }
    }
  }
`;

export const QUERY_ACTIVITIES = gql`
  query getActivities {
    activities {
      _id
      activityText
      activityPic
    }
  }
`;

export const QUERY_SINGLE_ACTIVITY = gql`
  query getSingleActivity($activityId: ID!) {
    activity(activityId: $activityId) {
      _id
      activityText
      activityPic
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      profilePic
      activities {
        _id
        activityText
        activityPic
      }
      bros {
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      activities {
        _id
        activityText
        activityPic
      }
      bros {
        _id
        name
      }
    }
  }
`;

export const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;
