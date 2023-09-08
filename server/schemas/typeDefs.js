const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    activities: [Activity]!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Activity {
    _id: ID
    activityText: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    activities: [Activity]
    activity(activityId: ID!): Activity
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addActivity(activityText: String!): Activity
    removeUser(userId: ID!): User
    removeActivity( activityId: ID!): User
  }
`;

module.exports = typeDefs;
