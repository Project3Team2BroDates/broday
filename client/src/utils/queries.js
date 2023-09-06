import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      activities {
        _id
        activityText
      }
    }
  }
`;

export const QUERY_ACTIVITIES = gql`
  query getActivities {
    activities {
      _id
      activityText
      activityAuthor
    }
  }
`;

export const QUERY_SINGLE_ACTIVITY = gql`
  query getSingleActivity($activityId: ID!) {
    activity(activityId: $activityId) {
      _id
      activityText
      activityAuthor
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      activities {
        _id
        activityText
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      activities {
        _id
        activityText
      }
    }
  }
`;
