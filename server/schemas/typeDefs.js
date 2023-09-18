const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    profilePic: String
    activities: [Activity]!
    bros: [User]!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Activity {
    _id: ID
    activityText: String
    activityPic: String
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    activities: [Activity]
    activity(activityId: ID!): Activity
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addBro(name: String!): User
    login(email: String!, password: String!): Auth

    addActivity(activityText: String!): Activity
    addExistingActivity(activityText: String!): Activity
    removeUser(userId: ID!): User
    removeActivity(activityText: String!): User
  }
`;

module.exports = typeDefs;
